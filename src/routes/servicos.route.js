import { Router } from "express";
import {findById, update, erase} from "../controllers/servicos.controller.js";
import {
  createServico,
  getService,
} from "../controllers/servicos.controller.js";
import {autentificacaoMiddleware} from "../middlewares/autentificacao.middlewares.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

router.post("/", autentificacaoMiddleware, createServico);

router.get("/", getService);

router.get(
  "/:id",
  globalMiddlewares.validIdServico,
  globalMiddlewares.validServico,
  findById
);

router.patch(
  "/:id",
  globalMiddlewares.validIdServico,
  globalMiddlewares.validServico,
  update
);

router.delete("/:id", autentificacaoMiddleware, erase);

export default router;
