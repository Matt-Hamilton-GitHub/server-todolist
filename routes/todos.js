const { Router } = require('express');
const express =  require('express')
const router = express.Router();
const db = require('../models')

router.get('/', function(req, res){
  db.Todo.find()
  .then(function(todos){
  res.json(todos)
  }).catch(function(err){
   res.send(err)
  })
})

router.post('/', function(req, res){
  db.Todo.create({name: req.body})
  .then(function(newTodo){
     res.json(newTodo)
  }).catch(function(err){
      res.send(err)
  })
})

router.get('/:todoId', function(req, res){
 db.Todo.findById(req.params.todoId)
 .then(function(foundTodo){
     res.json(foundTodo)
 }).catch(function(err){
     res.send(err)
 })
})

module.exports = router;