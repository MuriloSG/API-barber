import mongoose from "mongoose";
import userService from "../services/user.service.js";

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
    res.status(500).sed({ message: error.message });
  }
};

export default { validId, validUser };
