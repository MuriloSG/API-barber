import { Router } from "express";
import {
  createAgendamento,
  getAgendamemtos,
  erase
} from "../controllers/agendamentosClientes.controller.js";
import { autentificacaoMiddlewareUser } from "../middlewares/autentificacao.middlewares.js";
import { getServiceDisponiveis } from "../controllers/servicos.controller.js";
import globalMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

router.get("/servicosdisp", getServiceDisponiveis);

router.post(
  "/agendar",
  autentificacaoMiddlewareUser,
  globalMiddlewares.validIdAgendamento,
  globalMiddlewares.validAgendamento,
  createAgendamento
);
 
router.get("/", getAgendamemtos);

router.delete("/:id", autentificacaoMiddlewareUser, erase);

export default router;
