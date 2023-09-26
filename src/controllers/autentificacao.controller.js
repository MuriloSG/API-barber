import bcrypt from "bcrypt";
import {
  GerarToken,
  loginService,
  loginServiceADM,
  GerarTokenADM,
} from "../services/autentificacao.service.js";

//Fazer o login.
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    //Buscando usuario por email, Unico no DB.
    const user = await loginService(email);
    if (!user) {
      return res.status(404).send({ message: "Usuario ou Senha invalida" });
    }

    //variavel boleana para verificar se a senha digitada corresponde a algum usuario do DB, usando bcryptcompare(Senha digitada, SenhaDB).
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(404).send({ message: "Usuario ou Senha invalida" });
    }
    //gerando o tokem para esse Usuario.
    const tokem = GerarToken(user.id);
    res.send({ tokem });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Fazer login do administrador.
const loginADM = async (req, res) => {
  const { email, senha } = req.body;

  try {
    //Buscando usuario por email, Unico no DB na tabelas usersadm.
    const userADM = await loginServiceADM(email);
    if (!userADM) {
      return res.status(404).send({ message: "Usuario ou Senha invalida" });
    }

    //variavel boleana para verificar se a senha digitada corresponde a algum usuario do DB, usando bcryptcompare(Senhadigtada, SenhaDB).
    const senhaValida = await bcrypt.compare(senha, userADM.senha);
    if (!senhaValida) {
      return res.status(404).send({ message: "Usuario ou Senha invalida" });
    }
    //gerando o tokem para esse Usuario.
    const tokem = GerarTokenADM(userADM.id);
    res.send({ tokem });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { login, loginADM};
