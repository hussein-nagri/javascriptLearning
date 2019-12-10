const functions = require('firebase-functions');
const firebase = require('firebase');
const express = require('express');
const app = express();

const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream } = require("./handlers/screams");

const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users")

const FBAuth = require("./util/fbAuth")


//scream routes

//get all screams
app.get('/screams', getAllScreams);

//post a scream
app.post('/scream', FBAuth, postOneScream);

//
app.get("/scream/:screamId", getScream);

//TODO: delete scream
// Like a scream
app.get("/scream/:screamId/like", FBAuth, likeScream);

//unlike a scream
app.get("/scream/:screamId/unlike", FBAuth, unlikeScream);

//comment on scream
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);



//Users routes

//signup route
app.post("/signup", signup);

//login route
app.post(`/login`, login);


//image route
app.post("/user/image", FBAuth, uploadImage);

//add details about user like bio location etc
app.post("/user", FBAuth, addUserDetails);

//Obtain details about the logged in user (profile)
app.get("/user", FBAuth, getAuthenticatedUser);




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