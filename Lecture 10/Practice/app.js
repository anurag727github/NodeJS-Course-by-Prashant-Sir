const path = require('path');

const express =  require('express');

const user = require('./routes/user');
const host = require('./routes/host');

const rootDir = require('./utils/pathUtil');

const app = express();

app.use(express.urlencoded());

app.use(user);
app.use(host);

app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3002,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3002");
});  