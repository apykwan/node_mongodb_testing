const { model, Schema } = require('mongoose');

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
});

module.exports = model('todo', TodoSchema);