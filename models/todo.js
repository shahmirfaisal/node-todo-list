const getDb = require("../database/database").getDb;
const mongodb = require("mongodb");

module.exports = class Todo {
  constructor(task) {
    this.task = task;
    this.completed = false;
  }

  save() {
    const db = getDb();
    return db
      .collection("todo")
      .insertOne(this)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("todo")
      .find()
      .toArray()
      .then((todos) => todos)
      .catch((err) => console.log(err));
  }

  static taskCompleted(id) {
    const db = getDb();
    return db
      .collection("todo")
      .update({ _id: new mongodb.ObjectID(id) }, { $set: { completed: true } })
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  static deleteTask(id) {
    const db = getDb();
    return db
      .collection("todo")
      .deleteOne({ _id: new mongodb.ObjectID(id) })
      .then((res) => res)
      .catch((err) => console.log(err));
  }
};
