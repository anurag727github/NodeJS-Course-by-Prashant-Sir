console.log("Hellow this is my first nodeJS Code!!");

const fs =require('fs'); //here 'fs' means file System:  
fs.writeFile("output.text","Writing File using nodeJS", (err)=>{
  if(err) console.log("Error Occured in file.");
  else console.log("File is generated correctly!!");
}); 