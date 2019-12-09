const { db } = require("../util/admin");
const config = require("../util/config")
const firebase = require("firebase")

const { validateSignupData, validateLoginData } = require("../util/validators");

firebase.initializeApp(config);

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  const { valid, errors } = validateSignupData(newUser);
  if (!valid) { return res.status(400).json(errors); }

  let token, userId;
  //todo: validate data

  db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ handle: "this handle is already taken" });
      } else {
        return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    //if we get here, user is created, return authentication token
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();  //returns a promise --> return and another .then()
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(data => {
      return res.status(201).json({
        token
      })
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ email: 'email is already in use' });
      } else {
        return res.status(500).json({ error: err.code })
      }
    })
  return ""
}


exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }


  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors)


  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/wrong-password')
        return res.status(403).
          json({ general: `Wrong credentials, please try again` }) //403 is unauthorized
      return res.status(500).json({ error: err.code });
    });
  return ""
}