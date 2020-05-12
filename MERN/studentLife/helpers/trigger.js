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

  const db = await User.collection
    .find();


  // var toStore = [];

  //REALIZE YOU HAVE A LONG STRING
  //CUZ ITS THE image in str format
  db.forEach(doc => {
    JSON.stringify(doc)
  })

  // db.forEach(function (doc) {
  //   console.log("user: ", JSON.stringify(doc))
  // })


  console.log("me", arr)


  //ENCODED?
  // db.forEach(val => {
  //   // console.log(val);
  // })


  // console.log(db)

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

