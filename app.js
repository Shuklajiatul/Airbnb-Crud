// Core modules
const path = require('path');
// External modules
const express = require("express");


// Local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil")
const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);


app.use((req, res, next)=>{
res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})
const port = 9819;
app.listen(port, ()=>{
  console.log(`Server is running on the http://localhost:${port}`);
});