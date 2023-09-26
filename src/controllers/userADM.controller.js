import userADMService from "../services/userADM.service.js";

//Criação usuarios.
const create = async (req, res) => {
  try {
    const { id, nome, email, senha, telefone, avatar } =
      req.body;
    if (
      !nome ||
      !email ||
      !senha||
      !telefone ||
      !avatar
    ) {
      res.status(400).send({ message: "Dados não preenchidos" });
    }

    const userADM = await userADMService.createService(req.body);
    if (!userADM) {
      return res.status(400).send({ message: "Erro na criação do usuario" });
    }

    res.status(201).send({
      message: "Usuario criado com sucesso!",
      userADM: {
        id: userADM._id, 
        nome,
        email,
        telefone,
        avatar
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Mostrar todos usuarios.
const findAll = async (req, res) => {
  try {
    const users = await userADMService.findAllService();
    if (users.length === 0) {
      res.status(400).send({ message: "Não há usuarios cadastrados " });
    }
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Mostrar usuario por id.
const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Atualizando usuario.
const update = async (req, res) => {
  try {
    const { nome, email, senha, telefone, avatar, papel } =
      req.body;
    const { id, user } = req;
    if (
      !nome &&
      !email &&
      !senha &&
      !telefone &&
      !avatar
    ) {
      res
        .status(400)
        .send({ message: "Mande pelo menos um campo para update" });
    }
    await userADMService.updateService(
      id,
      nome,
      email,
      telefone,
      avatar
    );
    res.send({ message: "Usuario atualizado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export default { create, findAll, findById, update };
