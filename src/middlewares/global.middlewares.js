import mongoose from "mongoose";
import userService from "../services/user.service.js";
import { findByIdService } from "../services/servicos.service.js";
//Função para validar o id Fornecido.
const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    //Verificando se o ID é valido, com propriedade do mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Função para validar dados do usuario.
const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findByIdService(id); //Buscando no banco de dados.
    if (!user) {
      return res.status(400).send({ message: "Usuario não encontrado" });
    }

    //Enviando id e user para a proxima função que está em user.service.js
    req.id = id;
    req.user = user;
    next(); //Função para deixar prosseguir.
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Função para validar o id Fornecido.
const validIdServico = (req, res, next) => {
  try {
    const id = req.params.id;

    //Verificando se o ID é valido, com propriedade do mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Função para validar dados do serviço.
const validServico = async (req, res, next) => {
  try {
    const id = req.params.id;
    const servico = await findByIdService(id); //Buscando no banco de dados.
    if (!servico) {
      return res.status(400).send({ message: "Serviço não encontrado" });
    }
    //Enviando id e user para a proxima função que está em user.service.js
    req.id = id;
    req.servico = servico;
    next(); //Função para deixar prosseguir.
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Função para validar o id Fornecido.
const validIdAgendamento = (req, res, next) => {
  try {
    const { servico } = req.body;
    //Verificando se o ID é valido, com propriedade do mongoose
    if (!mongoose.Types.ObjectId.isValid(servico)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Função para validar dados do serviço.
const validAgendamento = async (req, res, next) => {
  try {
    const { servico } = req.body;
    const servicoExistente = await findByIdService(servico); //Buscando no banco de dados.
    if (!servicoExistente) {
      return res.status(400).send({ message: "Serviço não encontrado" });
    }
    //Enviando id e user para a proxima função que está em user.service.js
    req.servico = servico;
    next(); //Função para deixar prosseguir.
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
