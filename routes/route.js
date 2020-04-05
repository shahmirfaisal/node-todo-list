const router = require("express").Router();
const todoController = require("../controllers/todo");
const authController = require("../controllers/auth");

router.get("/", todoController.getTodo);

router.post("/add-item", todoController.postAddItem);

router.post("/task-completed/:id", todoController.postTaskCompleted);

router.post("/delete-task", todoController.postDeleteTask);

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

module.exports = router;
