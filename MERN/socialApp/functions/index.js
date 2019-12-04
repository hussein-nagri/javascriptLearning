const functions = require('firebase-functions');
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp({
  credential: admin.credential.cert(require('../key/admin.json'))
});


exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello World!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  admin.firestore().collection('screams').get()
    .then(data => {
      let screams = [];
      data.forEach(doc => {
        screams.push(doc.data());
      });
      return res.json(screams);
    })
    .catch(err => console.log(err));
});


exports.createScream = functions.https.onRequest((req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: admin.firestore.Timestamp.fromDate(new Date())
  }

  admin.firestore().collection('screams').add(newScream)
    // eslint-disable-next-line promise/always-return
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: 'something went wrong' }) //server error
      console.log(err)
    });
});