import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router
  .get("/user", UserController.getUser)
  .post("/user", UserController.createUser)
  .get("/user/:id", UserController.getUserById)
  .put("/user/:id", UserController.updateUser)
  .delete("/user/:id", UserController.deleteUser);

export default router;

//.get("/livros/busca", LivroController.listarLivroPorEditora)
