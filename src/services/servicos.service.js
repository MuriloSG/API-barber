import Servicos from "../models/Servicos.js";

const createService = (body) => Servicos.create(body); //Servicos.create método proprio do mongosse.

const findAllService = () => Servicos.find().populate("userADM"); //Servicos.find método proprio do mongosse.

const FindAllServicoDisponivel = async () => {
  try {
    const servicos = await Servicos.find({ status_agendamento: true });
    if (!servicos) {
      res.status(400).send({
        message: "Não há serviços disponiveis ",
      });
    }
    return servicos;
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findByIdService = (id) => Servicos.findById(id).populate("userADM");

const obterIdDoServicoPorUserADM = async (userId) => {
  try {
    const servico = await Servicos.findOne({ userADM: userId });
    if (!servico) {
      res.status(400).send({
        message: "Não há um usuario associado a um serviços cadastrados ",
      });
    }
    return servico._id;
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export {
  createService,
  findAllService,
  findByIdService,
  obterIdDoServicoPorUserADM,
  FindAllServicoDisponivel,
};
