import Servicos from "../models/Servicos.js";

const createService = (body) => Servicos.create(body); //Servicos.create método proprio do mongosse.

const findAllService = () => Servicos.find(); //Servicos.find método proprio do mongosse.

export { createService, findAllService };
