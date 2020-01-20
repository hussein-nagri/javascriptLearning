const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('fname', 'First name is required')
      .not()
      .isEmpty(),
    check('lname', 'Last name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {

    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("went here")
      return res.status(400).json({ errors: errors.array() });
    }

    const { fname, lname, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      let name = fname + " " + lname;

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }



      user = new User({
        name,
        email,
        password
      });

      // const salt = await bcrypt.genSalt(10);

      // user.password = await bcrypt.hash(password, salt);

      await user.save();

      // const payload = {
      //   user: {
      //     id: user.id
      //   }
      // };

      // jwt.sign(
      //   payload,
      //   config.get('jwtSecret'),
      //   { expiresIn: 360000 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
      console.log("user saved")
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/login',
  async (req, res) => {


    console.log(req.body);
    let { email, password } = req.body;

    try {
      let user = await User.findOne({ email, password });

      if (user) {
        //return the user data, and redirect to a new page
        return res.status(200).json({ msg: "success" })
      }
      else {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials. Please try again' }] });

      }


    } catch (err) {
      console.error(err)
    }


  }
);

module.exports = router;
