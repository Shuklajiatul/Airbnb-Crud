// Core modules
const path = require('path');
// External modules
const express = require("express");
// local modules
const rootDir = require("../utils/pathUtil")

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
})


hostRouter.post("/add-home", (req, res, next)=>{
  console.log(req.body)
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

module.exports = hostRouter;