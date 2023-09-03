import mongoose from "mongoose";
import userService from "../services/user.service.js";
import {findByIdService} from "../services/servicos.service.js";
//Função para validar o id Fornecido.
const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    //Verificando se o ID é valido, com propriedader do mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status().send({ message: error.message });
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

    //Verificando se o ID é valido, com propriedader do mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id invalido" });
    }
    next();
  } catch (error) {
    res.status().send({ message: error.message });
  }
};

//Função para validar dados do usuario.
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

export default { validId, validUser, validIdServico, validServico };
