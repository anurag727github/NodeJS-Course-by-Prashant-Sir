const fs =require('fs');

console.log("1. Start of Coding ");

//Synchronus code type 
console.log("2. reading file with synchronus method");
fs.readFileSync('user.txt', 'utf8');
console.log("3. reading file completed");

//Asynchronus code type
console.log("4. reading file with asynchronus method");
fs.readFile('user.txt', 'utf8', (err, dataAsync) =>{
  if(err) throw err;
  console.log("6. Asynchronus read completed");
});

console.log("5. End of coding");


//the order here defined is the order that the actual output gives at termianal