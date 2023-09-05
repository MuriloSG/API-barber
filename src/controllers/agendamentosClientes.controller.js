import {
  createService,
  findAllService,
} from "../services/agendamentoCliente.service.js";

import { updateStatus, findByIdService } from "../services/servicos.service.js";

// Controller de criação de Agendamento.
const createAgendamento = async (req, res) => {
  try {
    const service = await findByIdService(req.servico);

    if (!service.status_agendamento) {
      return res
        .status(400)
        .send({ message: "Erro ao criar agendamento não está disponível" });
    } else {
      const agendaCliente = await createService({
        user: req.UserId,
        servico: req.servico,
      });
      if (!agendaCliente) {
        return res.status(400).send({ message: "Erro ao criar agendamento" });
      } else {
        res.status(201).send({
          message: "Agendamento Cliente criado com sucesso!",
          agendamentoCliente: {
            user: req.UserId,
            servico: req.servico,
          },
        });
      }
      const serviceId = req.servico;
      await updateStatus(serviceId, false);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Controller de pegar Agenda
const getAgendamemtos = async (req, res) => {
  try {
    const agendasClientes = await findAllService();
    if (agendasClientes.length === 0) {
      return res.status(400).send({ message: "não existe agendamentos" });
    }
    res.send(agendasClientes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { createAgendamento, getAgendamemtos };
