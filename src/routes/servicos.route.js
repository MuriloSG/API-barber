import { Router } from "express";
import {
  createServico,
  getServico,
} from "../controllers/servicos.controller.js";
import {autentificacaoMiddleware} from "../middlewares/autentificacao.middlewares.js";
const router = Router();

// rota para criar serviço.
router.post("/", autentificacaoMiddleware, createServico);

// Listando servicos.
router.get("/", getServico);

export default router;
