const admin = require("firebase-admin");


//for locally
admin.initializeApp({
  credential: admin.credential.cert(require('../../key/admin.json'))
});

// admin.initializeApp(config);



const db = admin.firestore();


module.exports = { admin, db };