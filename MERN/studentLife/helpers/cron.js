var CronJob = require('cron').CronJob;
const User = require('../models/User');
const Teas = require('../models/Teams');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const axios = require("axios");

// add this to packagejson to start cron job \"node helpers/cron.js\" "
var job = new CronJob('* */2 * * *', async function () {

  myHacks = [];

  axios.request({
    method: 'get',
    url: 'http://localhost:5000/api/hackathons/present',
    port: 80,
  }).then(
    hackathons => {
      myHacks = hackathons;
    })
    .catch(err => {
      console.error(err);
    })

  console.log(myHacks);



  const msg = {
    to: 'sabihah.k2001@gmail.com',
    from: 'hznagri@uwaterloo.ca',
    subject: 'This is to see if my api works to losers',
    text: 'It works bc the hoe got it',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  try {
    await sgMail.send(msg);
    console.log("sent");
  } catch (error) {
    console.log(error);
  }


  console.log("Finished");
}, null, true, 'America/Los_Angeles');
job.start();
