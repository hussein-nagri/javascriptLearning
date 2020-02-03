const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');



// const User = require('../../models/User');

// @route    POST api/hackathons
// @desc     Register user
// @access   Public
router.get(
  '/',
  async (req, res) => {

    console.log(req.body)


  }
);