const functions = require('firebase-functions');
const admin = require("firebase-admin");
const firebase = require('firebase');
const express = require('express');
const app = express();

var firebaseConfig = {
  apiKey: "AIzaSyBffOg0wP8X2oJsSsvs8JnCANtPYOmtBv0",
  authDomain: "socialapp-8dc24.firebaseapp.com",
  databaseURL: "https://socialapp-8dc24.firebaseio.com",
  projectId: "socialapp-8dc24",
  storageBucket: "socialapp-8dc24.appspot.com",
  messagingSenderId: "121497261753",
  appId: "1:121497261753:web:4424eacdd42e2b52136d68",
  measurementId: "G-THG7EZMP3T"
};

//for locally

admin.initializeApp({
  credential: admin.credential.cert(require('../key/admin.json'))
});

// admin.initializeApp();



firebase.initializeApp(firebaseConfig);

app.get('/screams', (req, res) => {
  admin
    .firestore()
    .collection('screams')
    .orderBy('createdAt', "desc")
    .get()
    .then(data => {
      let screams = [];
      data.forEach(doc => {
        screams.push({
          id: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount
        });
      });
      return res.json(screams);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err.code });
    });
});

//post a scream
app.post('/scream', (req, res) => {

  if (req.body.body.trim() === '') {
    return res.status(400).json({ body: "Body must not be empty" })
  }

  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString()
    // likeCount: req.body.likeCount,
    // commentCount: req.body.commentCount
  }

  admin.firestore().collection('screams').add(newScream)
    .then(doc => {
      return res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      console.log(err)
      return res.status(500).json({ error: 'something went wrong' }) //server error
    });
});

//signup route
app.post("/signup", (req, res) => {

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  //todo: validate data

  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data => {
      return res.status(201).json({ message: `user${data.user.uid} signed up successfully` })
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ error: err.code })
    });


});







//tell firebase that app will be the new endpoint receiver -> u wanna hit /api https://baseurl.com /api/
exports.api = functions.https.onRequest(app);