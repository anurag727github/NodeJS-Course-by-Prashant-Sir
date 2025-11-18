const express =  require('express');
const bodyParser =  require('body-parser');

const app = express();

app.use((req, res, next) => {
  console.log("first mid", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second mid", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("third mid", req.url, req.method);
//   res.send("Welcome to Anurag's Coading");
// });

app.get("/",(req, res, next) => {
  console.log("Handling for / GET", req.url, req.method);
  res.send("Welcome to Anurag's Coading");
});

// app.get("/contact-us",(req, res, next) => {
//   console.log("Handling for /contact-us GET", req.url, req.method);
//   res.send("Welcome to Anurag's Coading");
// });


app.get("/contact-us",(req, res, next) => {
  console.log("Handling for /contact-us GET", req.url, req.method);
  res.send(`
    <h1>Please enter your details : </h1>
    <form action="/contact-us" method="POST">
      <input type= "name"  name= "name" placeholder= "Enter your name : " />
      <input type= "email" name ="email" placeholder= "Enter your email : " />
      <input type="Submit" />
    </form>
    `)
});

//using body parser to log the content from website from Now ON

app.post("/contact-us",(req, res, next) => {
  console.log("Handling for not declare bodyParser", req.url, req.method, req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req, res, next) => {
  console.log("Handling for /contact-us POST", req.url, req.method, req.body);
  res.send("<h3>Thank you for your info i will contact you soon</h3>");
});

// ✅ Your Question (Short):
// "Why does clicking the submit button change the page and show the content from the POST route?"

// ✅ Exact Answer (Very Short and Clear):
// Because when you click Submit, the browser sends a POST request to /contact-us, and then the browser loads whatever HTML the server sends back.
// So the page changes because the server response replaces your current page.

app.listen(3000,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3000");
});  