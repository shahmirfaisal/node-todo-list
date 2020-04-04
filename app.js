const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");

const router = require("./routes/route");
const mongoConnect = require("./database/database").mongoConnect;

// Using Ejs Templating Engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

app.use(router);

mongoConnect((client) => {
  app.listen(3000);
});
