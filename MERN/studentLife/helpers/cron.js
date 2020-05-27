var CronJob = require('cron').CronJob;
const User = require('../models/User');
const Teams = require('../models/Teams');

const myGuy = require('./myGuy');


const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const axios = require("axios");

// add this to packagejson to start cron job \"node helpers/cron.js\" "
var job = new CronJob('* * * * *', async function () {
  var promise = await axios.request({
    method: 'get',
    url: 'http://localhost:5000/api/hackathons/present',
    port: 80,
  });

  const items = promise.data;
  var result_of_hackathon_names = items.map(dict => {
    return dict.name;
  })

  console.log(result_of_hackathon_names);


  for (var ht in result_of_hackathon_names) {

    console.log("he");
    var ans;

    try {
      ans = await Teams.collection.find({ 'hackathon': ht });
      ans = ans.forEach(doc => {
        console.log(doc.userId);
      });
      console.log("here", ans);
    } catch (err) {
      console.error(err);
    }

    ans.then(function (result) {
      console.log(result) // "Some User token"
    })


    // var NewAns = await ans.then(function (result) {
    //   return result;
    // })

    console.log("OT in")
  }


  const msg = {
    to: 'husseinnagri@hotmail.com', //'sabihah.k2001@gmail.com',
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
