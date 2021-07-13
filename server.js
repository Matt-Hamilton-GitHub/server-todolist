const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const toDoList = ['cofee', 'milk', 'eggs']

app.get("/", function(req, res){
  res.send("<center><h1>Todo List API</h1></center>");
});





app.get('/to-do-list', function(req, res){
  res.json(toDoList)
})



app.listen(150,function(){
  console.log("Server runs on port 150");
});
