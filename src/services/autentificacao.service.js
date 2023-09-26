import User from "../models/User.js";
import UserADM from "../models/UserADM.js";
import jwt from "jsonwebtoken";

const loginService = (email) => User.findOne({ email: email }).select("+senha");

const GerarToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

const loginServiceADM = (email) =>
  UserADM.findOne({ email: email }).select("+senha");

const GerarTokenADM = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

export { loginService, GerarToken, loginServiceADM, GerarTokenADM };
