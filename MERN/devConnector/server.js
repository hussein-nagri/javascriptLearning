const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false })); // before body-parser was a package, but now its included in express ----- this also allows us to get the data from req.body



app.get("/", (req, res) => {
  res.send('API Running');
});

//Define routes
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/profile", require("./routes/api/profile"))
app.use("/api/posts", require("./routes/api/posts"))


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



