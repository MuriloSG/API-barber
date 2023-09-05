import { Router } from "express";
import {findById, update, erase} from "../controllers/servicos.controller.js";
import {
  createServico,
  getService,
} from "../controllers/servicos.controller.js";
import {autentificacaoMiddleware} from "../middlewares/autentificacao.middlewares.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

// rota para criar serviço.
router.post("/", autentificacaoMiddleware, createServico);

// Listando servicos.
router.get("/", getService);

//Pegando Serviço por id
router.get(
  "/:id",
  globalMiddlewares.validIdServico,
  globalMiddlewares.validServico,
  findById
);

//Atualizando serviço
router.patch(
  "/:id",
  globalMiddlewares.validIdServico,
  globalMiddlewares.validServico,
  update
);

//Deletando serviço
router.delete("/:id", autentificacaoMiddleware, erase);

export default router;
