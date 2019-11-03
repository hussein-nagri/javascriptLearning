const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mongoURI');


const connectDB = async () => {
  try {//put in try catch if it fails to connect
    //we put await bc mongoose.connect returns a promise
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });  //standard args bc of future depreciation

    console.log("MONGODB connected!!!");
  } catch (error) {
    console.error(error);
    //exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;