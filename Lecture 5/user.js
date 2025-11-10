
const fs = require('fs');//file system module

const requestHandler= (req, res) => {
  //created a server and set 3 values that server can see when any user visits it
  console.log(req.url,req.method);
    
  //routing as url is different for different pages
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

    //used to travel to specific url with data
  }else if(req.url.toLowerCase()==='/user' && req.method==='POST'){
    const body= [];
    req.on("data",chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end",() => {
      const fullbody =Buffer.concat(body).toString();
      console.log(fullbody);

      //decoding the data come with POST method
      const params = new URLSearchParams(fullbody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      //writing data to a file
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
    });
    res.statusCode = 302; //this code means redirection completed
    res.setHeader('Location','/'); //redirected to location
  }

    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<body><h1>you are in Wrong page url </h1></body>");
    res.write("</html>");
    return res.end();
};

//used to export any function or module components
module.exports = requestHandler;