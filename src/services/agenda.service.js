import Agenda from "../models/Agenda.js";

const createService = (body) => Agenda.create(body); //Agenda.create método proprio do mongosse.

const findAllService = () => Agenda.find().populate("userADM").populate("servicoADM"); //Agenda.find método proprio do mongosse.

//Exportando create
export { createService, findAllService };
