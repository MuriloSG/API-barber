import { createService, findAllService } from "../services/agenda.service.js";

//Controller de criação de Agenda.
const createServico = async (req, res) => {
  try {
    const { dia_semana, hora_agendamento, status_agendamento } = req.body;
    if (!dia_semana || !hora_agendamento || !status_agendamento) {
      res.status(400).send({ message: "Dados não preenchidos" });
    }
    const agenda = await createService({
      dia_semana,
      hora_agendamento,
      status_agendamento,
      userADM: req.UserId,
      servicoADM: req.ServicoADM,
    });
    if (!agenda) {
      return res.status(400).send({ message: "Erro ao criar Agenda" });
    }
    res.status(201).send({
      message: "Agenda criado com sucesso!",
      agenda: {
        dia_semana,
        hora_agendamento,
        status_agendamento,
        userADM: req.UserId,
        servicoADM: req.ServicoADM,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//Controller de pegar Agenda
const getServico = async (req, res) => {
  try {
    const agenda = await findAllService(); //findAll() função que esta em services.
    if (agenda.length === 0) {
      res.status(400).send({ message: "Não há Agenda" });
    }
    res.send(agenda);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createServico, getServico };
