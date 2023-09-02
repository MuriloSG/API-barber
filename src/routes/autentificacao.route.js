import { Router } from "express";
const router = Router();

import { login, loginADM } from "../controllers/autentificacao.controller.js";

//Rota para logar um usuario.
router.post("/", login);

//Rota para logar um usuario administrador.
router.post("/adm", loginADM);

export default router;
