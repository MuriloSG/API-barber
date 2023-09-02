import { Router } from "express";
import userADMControllers from "../controllers/userADM.controller.js";

//Importando middlewares(interceptador).
import globalMiddlewares from "../middlewares/global.middlewares.js";

const route = Router();

//Inserindo Usuario.
route.post("/", userADMControllers.create);

//Pegando Usuario
route.get("/", userADMControllers.findAll);

//Pegando Usuario por id
route.get(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userADMControllers.findById
);

//Atualizando usuario.
route.patch(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userADMControllers.update
);

//exportando rotas.
export default route;
