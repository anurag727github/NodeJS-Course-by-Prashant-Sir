const express =  require('express');

const app =express();

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

app.post("/contact-us",(req, res, next) => {
  console.log("Handling for /contact-us GET", req.url, req.method);
  res.send("<h3>Thank you for your info i will contact you soon</h3>");
});


app.listen(3001,(err)=> {
  if(err){
    console.log("Error in starting the server:", err);
    return;
  }
  console.log("Server is now open at http://localhost:3001");
}); 