import User from "../models/User.js";

const createService = (body) => User.create(body); //User.create método proprio do mongosse.

const findAllService = () => User.find(); //User.find método proprio do mongosse.

const findByIdService = (id) => User.findById(id); //User.findById método proprio do mongosse.

const updateService = (id, nome, email, Nomeusuario, telefone, avatar) =>
  User.findByIdAndUpdate(
    { _id: id },
    {
      nome,
      email,
      Nomeusuario,
      telefone,
      avatar,
    }
  ); //User.findByIdAndUpdate método proprio do mongosse, atualiza pelo id os campos que recebeu, se rercebeu apenas um atributo o patch atualiza ele apenas.

//Exportando create
export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
