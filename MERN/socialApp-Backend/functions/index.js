const functions = require('firebase-functions');
const firebase = require('firebase');
const express = require('express');
const app = express();

const { db } = require("./util/admin");

const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream, deleteScream } = require("./handlers/screams");

const { signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  markNotificationsAsRead }
  = require("./handlers/users")

const FBAuth = require("./util/fbAuth")
const cors = require('cors');

app.use(cors())

//scream routes

//get all screams
app.get('/screams', getAllScreams);

//post a scream
app.post('/scream', FBAuth, postOneScream);

//get a specific scream
app.get("/scream/:screamId", getScream);

// delete scream
app.delete("/scream/:screamId", FBAuth, deleteScream);

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

app.get(`/user/:handle`, getUserDetails);

app.post("/notifications", FBAuth, markNotificationsAsRead)


//tell firebase that app will be the new endpoint receiver -> u wanna hit /api https://baseurl.com /api/
exports.api = functions.https.onRequest(app);

exports.createNotifcationOnLike = functions.firestore
  .document("/comments/{id}")
  .onCreate(snapshot => {
    return db.doc(`/screams/${snapshot.data().screamId}`).get()
      .then(doc => {
        if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'comment',
            read: false,
            screamId: doc.id
          })
        }
      })

      .catch(err => {
        console.error(err);
        //no need to return anything bc this is a db trigger
      })

  })

exports.deleteNotificationOnUnlike = functions.firestore.
  document("/likes/{id}").onDelete(snapshot => {
    return db.doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch(err => {
        console.error(err);
        return;
      })
  })


exports.createNotifcationOnComment = functions.firestore
  .document("/likes/{id}")
  .onCreate(snapshot => {
    return db.doc(`/screams/${snapshot.data().screamId}`).get()
      .then(doc => {
        if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'like',
            read: false,
            screamId: doc.id
          })
        }
      })

      .catch(err => {
        console.error(err);
        return; //no need to return anything bc this is a db trigger
      })

  })


exports.onUserImageChange = functions.firestore.document(`/users/{userId}`)
  .onUpdate(change => {
    console.log(change.before.data());
    console.log(change.after.data())
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log("Image has changed");
      let batch = db.batch();
      return db.collection("screams").where("userHandle", "==", change.before.data().handle).get()
        .then(data => {
          data.forEach(doc => {
            const scream = db.doc(`/screams/${doc.id}`);
            batch.update(scream, { userImage: change.after.data().imageUrl });
          })

          return batch.commit();
        });
    } else return true;
  });

exports.onScreamDelete = functions.firestore.document(`/screams/{screamId}`)
  .onDelete((snapshot, context) => {
    const screamId = context.params.screamId;
    const batch = db.batch();
    return db.collection("comments").where("screamId", "==", screamId).get()
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        })
        return db.collection(`likes`).where("screamId", "==", screamId).get()
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/likes/${doc.id}`));
        })
        return db.collection(`notifications`).where("screamId", "==", screamId).get()
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/notifications/${doc.id}`));
        })
        return batch.commit();
      })
      .catch(err => {
        console.error(err);
      })
  })



//create user and return message that they signed up successfully

  // firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  //   .then(data => {
  //     return res.status(201).json({ message: `user ${data.user.uid} signed up successfully` })
  //   })
  //   .catch(err => {
  //     console.error(err)
  //     return res.status(500).json({ error: err.code })
  //   });