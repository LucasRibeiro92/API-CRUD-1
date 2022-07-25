import express from "express";
import ToDoController from "../controllers/ToDoController.js";

const router = express.Router();

router
  .get("/todo", ToDoController.getTasks)
  .post("/todo", ToDoController.createTask)
  .get("/todo/:id", ToDoController.getTaskById)
  .put("/todo/:id", ToDoController.updateTask)
  .delete("/todo/:id", ToDoController.deleteTask)
  .get("/todo/:id/deadline", ToDoController.getDeadline);

export default router;
