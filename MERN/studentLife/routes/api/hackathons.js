const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const fs = require("fs");
var path = require('path');
const auth = require('../../middleware/auth');


const axios = require("axios");
const cheerio = require("cheerio");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const jwt = require('jsonwebtoken');



const User = require('../../models/User');
const Teams = require("../../models/Teams");


// @route    POST api/hackathons
// @desc     Register user
// @access   Public
router.get(
  '/',
  async (req, res) => {

    var value = await myCache.get("hackathons");
    return res.status(200).json(value)

  }
);

router.get(
  '/init',
  async (req, res) => {

    var exists = myCache.has('hackathons');
    console.log("value: ", exists);
    if (exists === false) {
      var jsonPath = path.join(__dirname, '..', '..', 'config', 'hackathons.txt');
      fs.readFile(jsonPath, { encoding: 'utf-8' }, async (err, data) => {
        if (err) return err;
        await myCache.set("hackathons", data, 0);
      });
    }
    return res.status(200).json("done")

  }
);


router.get(
  '/present',
  async (req, res) => {
    var url = 'https://mlh.io/seasons/na-2020/events';
    var hackathonNames = [];
    const result = await axios.get(url)
    var $ = cheerio.load(result.data);

    //find each upcoming hackathon
    const links = ($('.container > .row')[1]);
    const $links = $(links);

    //save the names
    const name = $links.find("div > div >  a > div > h3")
    const $name = $(name);

    $name.each((i, e) => {
      hackathonNames.push({ name: e.children[0].data })
    });

    //save the dates
    const date = $links.find("div > div >  a > div > p")
    const $date = $(date);

    $date.each((i, e) => {
      hackathonNames[i]["date"] = (e.children[0].data);
    })

    //save locations
    const location = $links.find("div > div >  a > div > div >span")
    const $location = $(location);

    for (let i = 0; i < $location.length; i += 2) {
      hackathonNames[i / 2]["location"] = ($location[i].children[0].data);
    }

    //save card image
    const cImage = $links.find("div > div >  a > div >.image-wrap ")
    const $cImage = $(cImage);

    $cImage.each((i, e) => {
      e.children.map((e, j) => {
        hackathonNames[i]["cImage"] = e.attribs.src
      })
    })

    //save icon image
    const iImage = $links.find("div > div >  a > div >.event-logo ")
    const $iImage = $(iImage);

    $iImage.each((i, e) => {
      e.children.map((e, j) => {
        hackathonNames[i]["iImage"] = e.attribs.src
      })
    })


    return res.status(200).json(hackathonNames);
  }
);


//---------------------------------------------MAYBE TO DO

// @route    POST api/hackathons/:id
// @desc     Register user
// @access   Public

// router.get(
//   '/:id',
//   async (req, res) => {
//     //TODO
//     console.log(req.body);



//     return res.status(200).json({ msg: success })
//   }
// );


//---------------------------------------------MAYBE TO DO


// @route    POST api/hackathons/teamMake
// @desc     Register user
// @access   Public
router.post(
  '/makeTeam',
  async (req, res) => {
    await console.log(req.body);

    var token = req.headers.authorization;
    console.log(token)

    //TODO: have a .config file to pull secret token
    var decoded = await jwt.verify(token, 'mysecrettoken');

    console.log(decoded)

    var userId = decoded.id;

    const { interests, teamInterests, goal, makeInterests } = req.body;
    let user = await User.findOne({ _id: userId });

    if (!user) {
      return res
        .status(400)
        .json({ errors: 'Login expired' });
    }


    //TODO: ADD hackathon name being pushed
    //also need to have a frontnend button to renavigate to
    //the home page once submitted
    teamMake = new Teams({
      interests,
      teamInterests,
      goal,
      makeInterests,
      userId
    })

    await teamMake.save();

    // await Teams.collection.updateOne(
    //   { userId },
    //   {
    //     $set:
    //     {
    //       interests,
    //       teamInterests,
    //       goal,
    //       makeInterests,
    //       userId
    //     }
    //   }
    // );



    return res.status(200).json({ msg: "success" })
  }
);




module.exports = router;
