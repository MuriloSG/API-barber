import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

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
  );

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
