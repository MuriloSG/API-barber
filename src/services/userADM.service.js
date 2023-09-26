import UserADM from "../models/UserADM.js";

const createService = (body) => UserADM.create(body);

const findAllService = () => UserADM.find(); 

const findByIdServiceADM = (id) => UserADM.findById(id);

const updateService = (id, nome, email, telefone, avatar) =>
  UserADM.findByIdAndUpdate(
    { _id: id },
    {
      nome,
      email,
      telefone,
      avatar
    }
  ); 
export default { createService, findAllService, findByIdServiceADM, updateService};
