import { Router } from "express";
import userControllers from "../controllers/user.controller.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";

const route = Router();

route.post("/", userControllers.create);

route.get("/", userControllers.findAll);

route.get(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userControllers.findById
);

route.patch(
  "/:id",
  globalMiddlewares.validId,
  globalMiddlewares.validUser,
  userControllers.update
);

export default route;
