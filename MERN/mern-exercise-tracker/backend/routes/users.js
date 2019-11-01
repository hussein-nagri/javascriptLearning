const router = require("express").Router();
let User = require("../models/user.model");


router.route('/').get((req, res) => {
  //mongoose method to get a list of all users in the db, which returns a promise
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  //add user
  newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;