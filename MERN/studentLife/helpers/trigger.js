//TODO: run file every X minutes to see if team can be formed

let getTeam = async function () {

  const User = require("../models/User");
  const Teams = require("../models/Teams")
  const sgMail = require('@sendgrid/mail');
  require('dotenv').config();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  //TODO: Once matched, delete from DB

  //see this site for integration
  //https://app.sendgrid.com/guide

  const msg = {
    to: 'hnagri52@gmail.com',
    from: 'hznagri@uwaterloo.ca',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  try {
    await sgMail.send(msg);
    console.log("sent");
  } catch (error) {
    console.log(error);
  }


};


exports.getTeam = getTeam;

