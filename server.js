const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todos')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.send("<center><h1>Todo List API</h1></center>");
});


app.use('/api/todos', todoRoutes);


app.listen(150,function(){
  console.log("Server runs on port 150");
});
