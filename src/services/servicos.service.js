import Servicos from "../models/Servicos.js";

const createService = (body) => Servicos.create(body); //Servicos.create método proprio do mongosse.

const findAllService = () => Servicos.find().populate("userADM"); //Servicos.find método proprio do mongosse.

const findAllServiceDisponivel = async () => {
  try {
    const servicos = await Servicos.find({ status_agendamento: true }).populate(
      "userADM"
    );
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

const updateService = (
  id,
  titulo_servico,
  imagem_servico,
  descricao_servico,
  preco_servico,
  datacriacao_servico,
  dia_semana,
  hora_agendamento,
  status_agendamento
) =>
  Servicos.findByIdAndUpdate(
    { _id: id },
    {
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      dia_semana,
      hora_agendamento,
      status_agendamento,
    }
  );

const updateStatus = (id, status_agendamento) =>
  Servicos.findByIdAndUpdate(
    { _id: id },
    {
      status_agendamento,
    }
  );

const eraseService = (id) => Servicos.findOneAndDelete({_id: id});
export {
  createService,
  findAllService,
  findByIdService,
  obterIdDoServicoPorUserADM,
  findAllServiceDisponivel,
  updateService,
  updateStatus,
  eraseService
};
