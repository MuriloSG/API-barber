import { Router } from "express";
import { createAgendamento, getAgendamemtos } from "../controllers/agendamentosClientes.controller.js";
import { autentificacaoMiddlewareUser } from "../middlewares/autentificacao.middlewares.js";
import {getServicoDisponiveis} from "../controllers/servicos.controller.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

router.get("/servicosdisp", getServicoDisponiveis)
router.post("/agendar", autentificacaoMiddlewareUser,globalMiddlewares.validIdAgendamento, globalMiddlewares.validAgendamento, createAgendamento);
router.get("/", getAgendamemtos);

export default router;