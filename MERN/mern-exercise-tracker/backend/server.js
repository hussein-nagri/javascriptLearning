const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config(); //have our enviroment variables in the .env file

//create express server and its port
const app = express()
const port = process.env.PORT || 5000;

//middleware: second one allows us to parse json
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI; //database URI we get from mongoDB (where database is stored) ------> referened in the .env file
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } //flags stored -> 
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established succesfully")
});


const exercisesRouter = require('./routes/execises');
const usersRouter = require("./routes/users");

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//this will start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})