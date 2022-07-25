import express from "express";
import todo from "./todoRoute.js";
import user from "./userRoute.js";
import db from "../config/database.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Api em funcionamento");
  });

  app.use(express.json(), todo, user);
};

export default routes;
