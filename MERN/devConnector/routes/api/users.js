const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');  //this basically does form checking... if empty, is email, etc etc
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

//import the model to make a user object
const User = require("../../models/User");

//@route  Post api/users
//@desc register user
//@access public
router.post("/", [
  check('name', "name is a required field").not().isEmpty(),
  check("email", "please include a valid email address").isEmail(),
  check("password", "please enter a password with a minimum of 6 letters").isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    //if there are errors, it'll escape, otherwise all fields are valid and in
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const name = req.body.name;  //can rewrite all to const {name, email, password} = req.body
    const email = req.body.email;
    const password = req.body.password;


    try {
      //see if user exists 
      let user = await User.findOne({ email: email });  //we use await to avoid the promise (.then)
      if (user) {
        return res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      //get user gravitar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      //creates instance of user but doesnt save
      user = new User({
        name,
        email,
        avatar,
        password

      });

      //encypt password
      //create salt to hash it with
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save()

      //return jsonwebtoken

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