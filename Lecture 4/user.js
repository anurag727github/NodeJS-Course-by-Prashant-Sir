const http = require('http');
const fs = require('fs');

const server = http.createServer(function requestListener(req, res) {
  //created a server and set 3 values that server can see when any user visits it
  console.log(req.url,req.method,req.headers);
    
    
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>Coding Masters</title></head>");
    res.write("<body><h1>Enter Your details : </h1>");
    res.write('<form action="/user" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"/> <br><br>');
    res.write('<label for="gender">Gender:</label><br>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male:</label><br>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female:</label><br> <br>');
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();

  }else if(req.url.toLowerCase()==='/user' && req.method==='POST'){
    fs.writeFileSync('user.txt','New User Added');
    res.statusCode = 302; //this code means redirection conmpleted
    res.setHeader('Location','/'); //redirected to location
  }

    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<body><h1>you are in new page</h1></body>");
    res.write("</html>");
    return res.end();
});

server.listen(3000,()=> {
  console.log("Server is now open at http://localhost:3000");
});