const express = require('express');
require('dotenv').config();

const mongodb = require('./mongodb/mongodb.connect');
const todoRoutes = require('./routes/todo.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongodb();

app.get('/', (req, res) => {
  res.json({
    msg: "hello world"
  })
});

app.use('/todos', todoRoutes);
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const port = 8000;

if (process.env.NODE_ENV === 'development') {
  console.log('running')
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
}

module.exports = app;