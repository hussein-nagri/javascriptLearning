const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require('express-validator/check');
const request = require("request");
const config = require("config");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route  GET api/profile/me
//@desc Get current users profile
//@access Private


//using async await bc we're using mongoose which returns a promise
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
})


//@route  Post api/profile
//@desc Create or update user profile
//@access Private

router.post("/", [auth, //we use [] for all of the validation middleware
  [ //array of all of the checks
    check('status', 'status is required').not().isEmpty(),
    check("skills", "skills is required").not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });

    }
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;

    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    //build social object
    profileFields.social = {};//if i dont initialize, itll give us error saying like youtube/fb unfedinfed
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;


    try {
      let profile = await Profile.findOne({ user: req.user.id }) //comes from the token

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);


    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  });



//@route  GET api/profile
//@desc Get all profiles
//@access Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});


//@route  GET api/profile/user/:user_id
//@desc Get profile by user id
//@access Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.param.user_id }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });


    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("server error");
  }
});


//@route  delete api/profile
//@desc delete profile user and post
//@access Private

router.delete("/", auth, async (req, res) => {

  try {
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove user
    await User.findOneAndRemove({ _id: req.user.id });


    res.json({ msg: "User removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@route  PUT api/profile/experience
//@desc add profile experience
//@access Private

router.put("/experience", [auth, [
  check('title', 'title is required').not().isEmpty(),
  check('company', 'company is required').not().isEmpty(),
  check('from', 'from Date is required').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  } = req.body;

  const newExp = {
    title: title,
    company,
    location,
    from,
    to,
    current,
    description
  }

  try {
    const profile = await Profile.findOne({ user: req.user.id });

    profile.experience.unshift(newExp);
    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
})


//@route  DELETE api/profile/experience/:exp_id
//@desc Delete experience from profile
//@access Private

router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    //get profile of user
    const profile = await Profile.findOne({ user: req.user.id });

    //GET  index to remove
    const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

    //splicing it out
    profile.experience.splice(removeIndex, 1);

    //resave it
    await profile.save();
    res.json(profile)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
})

//@route  PUT api/profile/education
//@desc add education experience
//@access Private

router.put("/education", [auth, [
  check('school', 'School is required').not().isEmpty(),
  check('degree', 'Degree is required').not().isEmpty(),
  check('fieldofstudy', 'Field of study is required').not().isEmpty(),
  check('from', 'from Date is required').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
});


//@route  DELETE api/profile/education/:edu_id
//@desc Delete education from profile
//@access Private

router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    //get profile of user
    const profile = await Profile.findOne({ user: req.user.id });

    //GET  index to remove
    const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);

    //splicing it out
    profile.education.splice(removeIndex, 1);

    //resave it
    await profile.save();
    res.json(profile)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
})

//@route  GET api/profile/github/:username
//@desc get user repos from github
//@access Public

router.get("/github/:username", auth, async (req, res) => {
  try {

    const options = {
      uri: `https://api.github.com/users/${req.params.username}/repos?
      per_page=5&sort=created:asc&client_id=${config.get("githubClientId")}&client_secret=${config.get("githubSecret")}`,
      method: "GET",
      headers: {
        "user-agent": "node.js"
      }


    };
    request(options, (error, response, body) => {
      if (error) {
        console.error(error);
      }
      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: "No github profile found" });
      }

      res.json(JSON.parse(body));

      console.log("hi");
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
})


module.exports = router