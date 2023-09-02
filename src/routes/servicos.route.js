import { Router } from "express";
import {
  createServico,
  getServico,
} from "../controllers/servicos.controller.js";
const router = Router();

// rota para criar serviço.
router.post("/", createServico);

// Listando servicos.
router.get("/", getServico);

export default router;
