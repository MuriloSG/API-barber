import { Router } from "express";
const router = Router();

import { login } from "../controllers/autentificacao.controller.js";

//Rota para logar um usuario.
router.post("/", login);

//Rota para logar um usuario administrador.
router.post("/adm", login);

export default router;
