import { Router } from "express";
import { createServico, getServico } from "../controllers/agenda.controller.js";
import { autentificacaoMiddleware } from "../middlewares/autentificacao.middlewares.js";
const router = Router();

// rota para criar Agenda.
router.post("/", autentificacaoMiddleware, createServico);

// Listando Agenda.
router.get("/", getServico);

export default router;
