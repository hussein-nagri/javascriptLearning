const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const fs = require("fs");
var path = require('path');
const auth = require('../../middleware/auth');


const NodeCache = require("node-cache");
const myCache = new NodeCache();


// const User = require('../../models/User');

// @route    POST api/hackathons
// @desc     Register user
// @access   Public
router.get(
  '/',
  async (req, res) => {

    // var exists = myCache.has('hackathons');
    // console.log("value: ", exists);
    // if (exists === false) {
    //   var jsonPath = path.join(__dirname, '..', '..', 'config', 'hackathons.txt');
    //   fs.readFile(jsonPath, { encoding: 'utf-8' }, async (err, data) => {
    //     if (err) return err;
    //     await myCache.set("hackathons", data, 0);
    //     // return res.status(200).json(data)
    //   });
    // }

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
module.exports = router;
