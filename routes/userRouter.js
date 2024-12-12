// Core modules
const path = require('path');
// External modules
const express = require("express");
// local modules
const rootDir = require("../utils/pathUtil")

const userRouter = express.Router();

userRouter.get("/", (req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});
module.exports = userRouter;