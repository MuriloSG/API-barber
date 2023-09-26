import express from "express";
import userRoute from "./routes/user.route.js";
import autentificacaoRoute from "./routes/autentificacao.route.js";
import userADMRoute from "./routes/userADM.route.js";
import servicosRoute from "./routes/servicos.route.js";
import agendamentosClientes from "./routes/agendamentosClientes.route.js";

const app = express();

app.use(express.json());

app.use("/usuarios", userRoute);

app.use("/usuariosADM", userADMRoute);

app.use("/autentificacao", autentificacaoRoute);

app.use("/servicos", servicosRoute);

app.use("/agendamento", agendamentosClientes);

export default app;
