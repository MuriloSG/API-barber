import userService from "../services/user.service.js";

//Postando usuarios.
const create = async (req, res) => {
  try {
    const { id, nome, email, senha, Nomeusuario, telefone, avatar } =
      req.body;
    if (
      !nome ||
      !email ||
      !senha ||
      !Nomeusuario ||
      !telefone ||
      !avatar
    ) {
      res.status(400).send({ message: "Dados não preenchidos" });
    }

    const user = await userService.createService(req.body); //Await para esperar isso retornar algo,userService.createService(req.body) função que esta em services.
    if (!user) {
      return res.status(400).send({ message: "Erro create usuario" });
    }

    res.status(201).send({
      message: "Usuario criado com sucesso!",
      user: {
        id: user._id, //Propriedade de id do mongoDB,ja tem o _idc proprio !
        nome,
        email,
        Nomeusuario,
        telefone,
        avatar
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Buscando todos usuarios.
const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService(); //userService.findAll() função que esta em services.
    if (users.length === 0) {
      res.status(400).send({ message: "Não há usuarios cadastrados " });
    }
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Buscando usuario por id.
const findById = async (req, res) => {
  try {
    const user = req.user; // pengando user que o middlewares enviou.
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Atualizando ususario.
const update = async (req, res) => {
  try {
    const { nome, email, senha, Nomeusuario, telefone, avatar, papel } =
      req.body;
    const { id, user } = req; // pengando user que o middlewares enviou.
    if (
      !nome &&
      !email &&
      !senha &&
      !Nomeusuario &&
      !telefone &&
      !avatar
    ) {
      res
        .status(400)
        .send({ message: "Mande pelo menos um campo para update" });
    }
    await userService.updateService(
      id,
      nome,
      email,
      Nomeusuario,
      telefone,
      avatar
    );
    res.send({ message: "Usuario atualizado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export default { create, findAll, findById, update };
