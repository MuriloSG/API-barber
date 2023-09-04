import mongoose from "mongoose";

//Criando schema AgendaCliente.
const AgendaClienteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  servico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicos",
    require: true,
  },
  datacriacao_agendamendo: {
    type: Date,
    default: Date.now(),
  },
});

//Definindo Schema.
const AgendaCliente = mongoose.model("AgendaCliente", AgendaClienteSchema);

export default AgendaCliente;
