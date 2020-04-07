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


    // var jsonPath = path.join(__dirname, '..', '..', 'config', 'hackathons.txt');
    // fs.readFile(jsonPath, { encoding: 'utf-8' }, async (err, data) => {
    //   if (err) return err;
    //   await myCache.set("hackathons", data, 10000);

    //   console.log("Here");

    //   num = data;
    //   // return res.status(200).json(data);
    // });


    // console.log(num);
    var value = await myCache.get("hackathons");
    // console.log(value)
    return res.status(200).json(value)



  }
);

router.get(
  '/init',
  async (req, res) => {


    var value = await myCache.get("hackathons");
    if (value == undefined) {

      var jsonPath = path.join(__dirname, '..', '..', 'config', 'hackathons.txt');
      fs.readFile(jsonPath, { encoding: 'utf-8' }, async (err, data) => {
        if (err) return err;
        await myCache.set("hackathons", data, 10000);
        console.log("Here");
        return res.status(200).json("success");
      });

    }
    return res.status(200).json("success");
  }
);



module.exports = router;
