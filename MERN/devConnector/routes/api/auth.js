const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator/check');  //this basically does form checking... if empty, is email, etc etc
const jwt = require("jsonwebtoken");
const config = require("config");

//@route  GET api/auth
//@desc Test route
//@access public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('server error');
  }

});


//@route  Post api/auth
//@desc authenticate user and get token
//@access public
router.post("/", [
  check("email", "please include a valid email address").isEmail(),
  check("password", "password is required ").exists()
],
  async (req, res) => {
    const errors = validationResult(req);
    //if there are errors, it'll escape, otherwise all fields are valid and in
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    //can rewrite all to const {email, password} = req.body
    const email = req.body.email;
    const password = req.body.password;


    try {
      //see if user exists 
      let user = await User.findOne({ email: email });  //we use await to avoid the promise (.then)
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
      }

      //compare passwords to see if they match
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id //mongoose allows us to not have to write _id
        }
      }


      jwt.sign(payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 }, //optional
        (err, token) => { //callback we get err or token, and we just send token back if we get it
          if (err) throw err;
          res.json({ token });
        });

    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  });



module.exports = router