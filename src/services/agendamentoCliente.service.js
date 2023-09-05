import agendamentosClentes from "../models/agendamentosClientes.js";

const createService = (body) => agendamentosClentes.create(body); //Agenda.create método proprio do mongosse.

const findAllService = () => agendamentosClentes.find().populate("servico").populate("user");//Agenda.find método proprio do mongosse.

//Exportando create
export { createService, findAllService };