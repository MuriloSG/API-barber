import { Router } from "express";
import { login, loginADM } from "../controllers/autentificacao.controller.js";

const router = Router();

router.post("/", login);

router.post("/adm", loginADM);

export default router;
