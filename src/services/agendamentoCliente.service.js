import agendamentosClentes from "../models/agendamentosClientes.js";

const createService = (body) => agendamentosClentes.create(body); 

const findAllService = () => agendamentosClentes.find().populate("servico").populate("user");

const findByIdServiceAgendamento = (id) => agendamentosClentes.findById(id).populate("user");

const eraseService = (id) => agendamentosClentes.findOneAndDelete({_id: id});

//Exportando create
export { createService, findAllService,findByIdServiceAgendamento, eraseService };