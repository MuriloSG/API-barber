import { Router } from "express";
import userADMControllers from "../controllers/userADM.controller.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";

const route = Router();

route.post("/", userADMControllers.create);

route.get("/", userADMControllers.findAll);

route.get(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userADMControllers.findById
);

route.patch(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userADMControllers.update
);

export default route;
