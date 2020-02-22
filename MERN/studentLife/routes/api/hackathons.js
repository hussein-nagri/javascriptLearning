const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const fs = require("fs");
var path = require('path');
const auth = require('../../middleware/auth');


// const User = require('../../models/User');

// @route    POST api/hackathons
// @desc     Register user
// @access   Public
router.get(
  '/',
  async (req, res) => {
    var jsonPath = path.join(__dirname, '..', '..', 'config', 'hackathons.txt');
    fs.readFile(jsonPath, { encoding: 'utf-8' }, (err, data) => {
      if (err) return err;
      return res.status(200).json(data);
    })
  }
);



module.exports = router;
