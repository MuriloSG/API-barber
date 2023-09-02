import { createService, findAllService } from "../services/servicos.service.js";

//Controller de criação de serviços.
const createServico = async (req, res) => {
  try {
    const {
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
    } = req.body;
    if (
      !titulo_servico ||
      !imagem_servico ||
      !descricao_servico ||
      !preco_servico
    ) {
      res.status(400).send({ message: "Dados não preenchidos" });
    }
    const servicos = await createService({
      titulo_servico,
      imagem_servico,
      descricao_servico,
      preco_servico,
      datacriacao_servico,
      userADM: { _id: "64f33a5fb246d747e8801264" },
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
        userADM: { _id: "64f33a5fb246d747e8801264" },
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Controller de criação de serviços
const getServico = async (req, res) => {
  try {
    const servicos = await findAllService(); //findAll() função que esta em services.
    if (servicos.length === 0) {
      res.status(400).send({ message: "Não há serviços cadastrados " });
    }
    res.send(servicos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createServico, getServico };
