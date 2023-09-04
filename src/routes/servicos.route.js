import { Router } from "express";
import {findById, update } from "../controllers/servicos.controller.js";
import {
  createServico,
  getServico,
} from "../controllers/servicos.controller.js";
import {autentificacaoMiddleware} from "../middlewares/autentificacao.middlewares.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

// rota para criar serviço.
router.post("/", autentificacaoMiddleware, createServico);

// Listando servicos.
router.get("/", getServico);

//Pegando Serviço por id
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

export default router;
