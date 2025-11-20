const path = require('path');

const express =  require('express');

const rootDir = require('./utils/pathUtil');

const app = express();

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");


app.use(express.static(path.join(rootDir, "public")));

app.use(express.urlencoded({extended:true}));

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
});

app.listen(3001,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3001");
});  