//TODO: run file every X minutes to see if team can be formed

const User = require("../models/User");
const Teams = require("../models/")
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function getTeam() {



  //TODO: Once matched, delete from DB

  const msg = {
    to: 'husseinnagri@hotmail.com',
    from: 'hznagri@uwaterloo.ca',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.send(msg);

}



