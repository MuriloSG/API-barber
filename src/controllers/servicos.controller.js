import {
  createService,
  eraseService,
  findAllService,
  findAllServiceDisponivel,
  findByIdService,
  updateService,
} from "../services/servicos.service.js";

//Controller de criação de serviços.
const createServico = async (req, res) => {
  try {
    const {
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      dia_semana,
      hora_agendamento,
      status_agendamento,
    } = req.body;
    if (
      !titulo_servico ||
      !imagem_servico ||
      !descricao_servico ||
      !preco_servico ||
      !dia_semana ||
      !hora_agendamento
    ) {
      res.status(400).send({ message: "Dados não preenchidos" });
    }
    const servicos = await createService({
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      dia_semana,
      hora_agendamento,
      status_agendamento,
      userADM: req.UserId,
    });
    if (!servicos) {
      return res.status(400).send({ message: "Erro ao criar serviço" });
    }
    res.status(201).send({
      message: "Serviço criado com sucesso!",
      servicos: {
        titulo_servico,
        imagem_servico,
        descricao_servico,
        preco_servico,
        datacriacao_servico,
        dia_semana,
        hora_agendamento,
        status_agendamento,
        userADM: req.UserId,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Controller de motrar todos os serviços
const getService = async (req, res) => {
  try {
    const servicos = await findAllService(); //findAll() função que esta em services.
    if (servicos.length === 0) {
      res.status(400).send({ message: "Não há serviços cadastrados " });
    } else {
      res.send(servicos);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Controller de motrar todos os serviços disponiveis
const getServiceDisponiveis = async (req, res) => {
  try {
    const servicos = await findAllServiceDisponivel(); //findAll() função que esta em services.
    if (servicos.length === 0) {
      res.status(404).send({ message: "Não há serviços disponiveis " });
    } else {
      res.send(servicos);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const servicos = req.servico; // pengando serviço que o middlewares enviou.
    res.send(servicos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Atualizando Servico.
const update = async (req, res) => {
  try {
    const {
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      dia_semana,
      hora_agendamento,
      status_agendamento,
    } = req.body;
    const { id } = req.servico; // pengando serviço que o middlewares enviou.
    if (
      !titulo_servico &&
      !imagem_servico &&
      !descricao_servico &&
      !preco_servico &&
      !datacriacao_servico &&
      !dia_semana &&
      !hora_agendamento &&
      !status_agendamento
    ) {
      return res
        .status(400)
        .send({ message: "Mande pelo menos um campo para update" });
    }
    await updateService(
      id,
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      dia_semana,
      hora_agendamento,
      status_agendamento
    );
    res.send({ message: "Servico atualizado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Deletando servico
const erase = async (req, res) => {
  try {
    const id = req.params.id;

    const service = await findByIdService(id);

    if (String(service.userADM._id) !== req.UserId) {
      return res.status(400).send({ message: "Não foi possivel deletar esse serviço" });
    } else if (await eraseService(id)) {
      return res.status(201).send({ message: "Serviço deletado com sucesso" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export {
  createServico,
  getService,
  findById,
  getServiceDisponiveis,
  update,
  erase,
};
