import User from "../models/User.js";
import UserADM from "../models/UserADM.js";
import jwt from "jsonwebtoken";

//serviço de busca por email trazendo a senha que antes nào vinha nas respostas, com findOne.
const loginService = (email) => User.findOne({ email: email }).select("+senha");

//Função para gerar um token para o usuario.
const GerarToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

//serviço de busca por email trazendo a senha que antes nào vinha nas respostas dos usuarios administradores, com findOne.
const loginServiceADM = (email) =>
  UserADM.findOne({ email: email }).select("+senha");

//Função para gerar um token para o usuario administrador.
const GerarTokenADM = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, GerarToken, loginServiceADM, GerarTokenADM };
