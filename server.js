
const express = require("express");

const app = express();

app.get("/", function(req, res){
response.send("Hello");
});

app.get("/contacts", function(req, res){
  res.send("Contact me at: paulnstopford@gmail.com");
});

app.get("/about", function(req, res){
  res.send("I love to eat Flanagans while jamming to death metal on my guitar");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
