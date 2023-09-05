import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import userADMService from "../services/userADM.service.js";
import userService from "../services/user.service.js";
import { obterIdDoServicoPorUserADM } from "../services/servicos.service.js";
dotenv.config();

export const autentificacaoMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.send(401);
    }
    const parts = authorization.split(" ");
    const [schema, token] = parts;
    if (parts.length !== 2) {
      return res.send(401);
    }
    if (schema !== "Bearer") {
      return res.send(401);
    }

    Jwt.verify(token, process.env.SECRET_JWT, async (erro, decoded) => {
      if (erro) {
        return res.status(401).send({ message: "Token invalido" });
      }
      const userADM = await userADMService.findByIdServiceADM(decoded.id);
      if (!userADM || !userADM.id) {
        return res.status(401).send({ message: "Token invalido" });
      }
      req.UserId = userADM.id;
      return next();
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


export const autentificacaoMiddlewareUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.send(401);
    }
    const parts = authorization.split(" ");
    const [schema, token] = parts;
    if (parts.length !== 2) {
      return res.send(401);
    }
    if (schema !== "Bearer") {
      return res.send(401);
    }

    Jwt.verify(token, process.env.SECRET_JWT, async (erro, decoded) => {
      if (erro) {
        return res.status(401).send({ message: "Token invalido" });
      }
      const user = await userService.findByIdService(decoded.id);
      if (!user || !user.id) {
        return res.status(401).send({ message: "Token invalido" });
      }
      req.UserId = user.id;
      return next();
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
