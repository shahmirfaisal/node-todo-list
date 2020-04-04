const Todo = require("../models/todo");

exports.getTodo = (req, res, next) => {
  Todo.fetchAll().then((todos) => {
    res.render("index", {
      todos,
    });
  });
};

exports.postAddItem = (req, res, next) => {
  const todo = new Todo(req.body.task);
  todo.save().then(() => {
    res.redirect("/");
  });
};

exports.postTaskCompleted = (req, res, next) => {
  Todo.taskCompleted(req.params.id).then(() => {
    res.redirect("/");
  });
};

exports.postDeleteTask = (req, res, next) => {
  Todo.deleteTask(req.body.id).then(() => {
    res.redirect("/");
  });
};
