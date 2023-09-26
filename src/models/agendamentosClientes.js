import mongoose from "mongoose";

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

const AgendaCliente = mongoose.model("AgendaCliente", AgendaClienteSchema);

export default AgendaCliente;
