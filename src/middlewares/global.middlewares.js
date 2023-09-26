import mongoose from "mongoose";
import userService from "../services/user.service.js";
import { findByIdService } from "../services/servicos.service.js";

const validId = (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findByIdService(id); 
    if (!user) {
      return res.status(400).send({ message: "Usuario não encontrado" });
    }
    req.id = id;
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validIdServico = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validServico = async (req, res, next) => {
  try {
    const id = req.params.id;
    const servico = await findByIdService(id);
    if (!servico) {
      return res.status(400).send({ message: "Serviço não encontrado" });
    }
    req.id = id;
    req.servico = servico;
    next(); //Função para deixar prosseguir.
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validIdAgendamento = (req, res, next) => {
  try {
    const { servico } = req.body;
    if (!mongoose.Types.ObjectId.isValid(servico)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validAgendamento = async (req, res, next) => {
  try {
    const { servico } = req.body;
    const servicoExistente = await findByIdService(servico);
    if (!servicoExistente) {
      return res.status(400).send({ message: "Serviço não encontrado" });
    }
    req.servico = servico;
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default {
  validId,
  validUser,
  validIdServico,
  validServico,
  validIdAgendamento,
  validAgendamento,
};
