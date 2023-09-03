import mongoose from "mongoose";

//Criando schema Agenda.
const AgendaSchema = new mongoose.Schema({
  userADM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserADM",
    require: true,
  },
  servicoADM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servicos",
    require: true,
  },
  dia_semana: {
    type: String,
    require: true,
  },
  hora_agendamento: {
    type: String,
    require: true,
  },
  status_agendamento: {
    type: Boolean,
    default: true,
    require: true,
  }
});

//Definindo Schema.
const Agenda = mongoose.model("Agenda", AgendaSchema);

export default Agenda;
