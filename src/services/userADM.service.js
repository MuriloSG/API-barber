import UserADM from "../models/UserADM.js";

const createService = (body) => UserADM.create(body); //UserADM.create método proprio do mongosse.

const findAllService = () => UserADM.find(); //UserADM.find método proprio do mongosse.

const findByIdService = (id) => UserADM.findById(id); //UserADM.findById método proprio do mongosse.

const updateService = (id, nome, email, telefone, avatar) =>
  UserADM.findByIdAndUpdate(
    { _id: id },
    {
      nome,
      email,
      telefone,
      avatar
    }
  ); //UserADM.findByIdAndUpdate método proprio do mongosse, atualiza pelo id os campos que recebeu, se rercebeu apenas um atributo o patch atualiza ele apenas.

//Exportando create
export default { createService, findAllService, findByIdService, updateService};
