import Servicos from "../models/Servicos.js";

const createService = (body) => Servicos.create(body); //Servicos.create método proprio do mongosse.

const findAllService = () => Servicos.find().populate("userADM"); //Servicos.find método proprio do mongosse.

const findByIdService = (id) => Servicos.findById(id);

const obterIdDoServicoPorUserADM = async (userId) => {
  try {
    const servico = await Servicos.findOne({ userADM: userId });
    if (!servico) {
      res.status(400).send({ message: "Não há um usuario associado a um serviços cadastrados " });
    }
    return servico._id;
  } catch (error) {
    
  }
};

export {
  createService,
  findAllService,
  findByIdService,
  obterIdDoServicoPorUserADM,
};
