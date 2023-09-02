import app from "./src/app.js";

//Importando Arquivo de conexão, comando no terminal npm i dotenv.
import connectDataBase from "./src/database/db.js";

//Importando dotenv para configurar variaveis de ambiente.
import dotenv from "dotenv";

//Usando dotenv.
dotenv.config();

//Criando a porta, por padrão usar 3000, documentação do express.
const PORT = process.env.PORT || 3000;

//Chamando conexão.
connectDataBase();

//Executando a porta.
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
