const jwt = require("jsonwebtoken");
const config = require("config");

//since it is a middleware function, it takes in these 3 params
module.exports = function (req, res, next) {
  //get token from header
  const token = req.header('x-auth-token');

  //check if there isnt any token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied!" })
  }

  //verify token 

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }

}


//this middleware is used to validate the user and their token