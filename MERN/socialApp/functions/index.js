const functions = require('firebase-functions');
const firebase = require('firebase');
const express = require('express');
const app = express();

const { getAllScreams, postOneScream } = require("./handlers/screams");

const { signup, login, uploadImage } = require("./handlers/users")

const FBAuth = require("./util/fbAuth")


//scream routes

//get all screams
app.get('/screams', getAllScreams);

//post a scream
app.post('/scream', FBAuth, postOneScream);

//Users routes

//signup route
app.post("/signup", signup);

//login route
app.post(`/login`, login);

//image route
app.post("/user/image", uploadImage)




//tell firebase that app will be the new endpoint receiver -> u wanna hit /api https://baseurl.com /api/
exports.api = functions.https.onRequest(app);




//create user and return message that they signed up successfully

  // firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  //   .then(data => {
  //     return res.status(201).json({ message: `user ${data.user.uid} signed up successfully` })
  //   })
  //   .catch(err => {
  //     console.error(err)
  //     return res.status(500).json({ error: err.code })
  //   });