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


// const User = require('../../models/User');

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

    // const arr = [];

    const result = await axios.get(url)
    var $ = cheerio.load(result.data);

    const links = ($('.container > .row')[1]);
    const $links = $(links);

    const name = $links.find("div > div >  a > div > h3")
    const $name = $(name);

    console.log($name.text());



    //finish this

    return res.status(200).json("went back");
  }
);
module.exports = router;
