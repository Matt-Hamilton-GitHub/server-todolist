const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<center><h1>Hello</h1></center>");
});

app.get("/contact", function(req, res){
  res.send("<h1>Contact me: +13235782846 </h1>");
});

app.get("/about", function(req, res1){
  res1.send("<p>Hello Evryone<br> My name is Matt and I am trying to run my first server!<br> Good Luck to me!")
})

app.get("/calculator", function(req, res){
  res.send("<h1>Calculator</h1>");
})
app.listen(150,function(){
  console.log("Server started on port 150");
});
