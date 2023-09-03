import express from "express";

//importando rotas.
import userRoute from "./routes/user.route.js";
import autentificacaoRoute from "./routes/autentificacao.route.js";
import userADMRoute from "./routes/userADM.route.js";
import servicosRoute from "./routes/servicos.route.js";
import agendaRoute from "./routes/agenda.route.js";

//Criando uma instancia para o express.
const app = express();

//Mostrar para o express ler body com json.
app.use(express.json());

//Usando rota de usuarios
app.use("/usuarios", userRoute);

//Usando rota de useuarios administradores.
app.use("/usuariosADM", userADMRoute);

//Usando rota de login usuario.
app.use("/autentificacao", autentificacaoRoute);

//Usando rota de Serviços.
app.use("/servicos", servicosRoute);

//Usando rota de Agenda.
app.use("/agenda", agendaRoute);

//Exportando para sunir o servirdo local.
export default app;
