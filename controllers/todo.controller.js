const TodoModel = require('../models/todo.model');
const catchAsync = require('./errorHandler');

// exports.createTodo = catchAsync(async function(req, res, next) {
//   const todo = await TodoModel.create(req.body);
//   res.status(201).json(todo);
// });

async function createTodo(req, res, next) {
  try {
    const todo = await TodoModel.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
}

async function getTodos(req, res, next) {
  try {
    const todos = await TodoModel.find({});
    res.status(201).json(todos);
  } catch (error) {
    next(error);
  }
}

async function getTodoById(req, res, next) {

}


module.exports = {
  createTodo,
  getTodos,
  getTodoById
}