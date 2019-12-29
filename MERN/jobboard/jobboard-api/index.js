const express = require('express')
var firebase = require('firebase');
firebase.initializeApp({
  apiKey: "AIzaSyDp1LT3pw39OLN5-DFzSbDIkehO9-O2bL0",
  authDomain: "jobboard-dfe79.firebaseapp.com",
  databaseURL: "https://jobboard-dfe79.firebaseio.com",
  projectId: "jobboard-dfe79",
  storageBucket: "jobboard-dfe79.appspot.com",
  messagingSenderId: "417803174373",
  appId: "1:417803174373:web:56a061e570df8408ef6f0c",
  measurementId: "G-3BHPKKH8P5"
});
const app = express()
const port = 3001


app.get('/jobs', async (req, res) => {

  var ans;

  const jobs = await firebase.database().ref('/jobs').once('value').then(function (snapshot) {
    ans = snapshot
  });

  console.log("Hello")
  console.log(ans)
  return res.send(ans)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))