import { Router } from "express";
import userControllers from "../controllers/user.controller.js";

//Importando middlewares(interceptador).
import globalMiddlewares from "../middlewares/global.middlewares.js";

const route = Router();

//Inserindo Usuario.
route.post("/", userControllers.create);

//Pegando Usuario
route.get("/", userControllers.findAll);

//Pegando Usuario por id
route.get(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userControllers.findById
);

//Atualizando usuario.
route.patch(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userControllers.update
);

//exportando rotas.
export default route;
