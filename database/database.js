const MongoClient = require("mongodb").MongoClient;

let db;

exports.mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://shahmir:programmingchola@cluster0-3jbwc.mongodb.net/todo?retryWrites=true&w=majority"
  )
    .then((client) => {
      cb(client);
      db = client.db();
    })
    .catch((err) => console.log(err));
};

exports.getDb = () => db;
