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
      let userRetrieved = await User.findOne({ email, password });
      if (userRetrieved) {

        userObj = {
          id: userRetrieved._id,
          name: userRetrieved.name,
          email: userRetrieved.email,
          password: userRetrieved.password
        }

        //activate a token 
        let token = jwt.sign(
          userObj,
          config.get('jwtSecret'),
          { expiresIn: 360000 });


        //return the user data, and redirect to a new page
        return res.status(200).json({
          msg: 'success',
          token: token
        })

      }

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
      return res.status(200).json({
        msg: 'success'
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// @route    POST api/users/login
// @desc     login user
// @access   Public
router.post(
  '/login',
  async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;

    try {
      let user = await User.findOne({ email, password });
      if (!user) {
        return res
          .status(400)
          .json({ errors: 'Invalid Credentials. Please try again' });
      }
      if (user) {

        userObj = {
          id: user._id,
          name: user.name,
          email: user.email,
          password: user.password
        }

        //activate a token 
        let token = jwt.sign(
          userObj,
          config.get('jwtSecret'),
          { expiresIn: 360000 });


        //return the user data, and redirect to a new page
        return res.status(200).json({
          msg: 'success',
          token: token
        })
      }
    } catch (err) {
      console.error(err)
      res.status(500).send('Server error');
    }
  }
);



// @route    POST api/users/personalInfo
// @desc     login user
// @access   Private
router.post(
  '/registerPersonal', [
    check('firstName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty(),
    check('age', 'Please include an age').isNumeric(),
    check(
      'gender',
      'Please choose a gender'
    )
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('number', "Please enter a valid phone number").isMobilePhone(),
    check('address', 'Address is required')
      .not()
      .isEmpty(),
    check('uni', 'University is required')
      .not()
      .isEmpty(),
    check('city', 'City is required')
      .not()
      .isEmpty(),
    check('country', 'Country is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    console.log(req.headers.authorization);

    var token = req.headers.authorization;
    var decoded = await jwt.verify(token.tostring(), 'secretkey');

    // jwt.verify(token, 'secretkey', function (err, decoded) {
    //   console.log(decoded) // bar
    // });
    console.log(decoded);

    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    return res.status(200).json({
      msg: 'success'
    })


  }
);

module.exports = router;
