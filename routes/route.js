const router = require("express").Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getTodo);

router.post("/add-item", todoController.postAddItem);

router.post("/task-completed/:id", todoController.postTaskCompleted);

router.post("/delete-task", todoController.postDeleteTask);

module.exports = router;
