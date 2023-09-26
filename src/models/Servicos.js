import mongoose from "mongoose";

const ServicosSchema = new mongoose.Schema({
  titulo_servico: {
    type: String,
    require: true,
  },
  imagem_servico: {
    type: String,
    require: true,
  },
  descricao_servico: {
    type: String,
    require: true,
  },
  preco_servico: {
    type: Number,
    require: true,
  },
  datacriacao_servico: {
    type: Date,
    default: Date.now(),
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
  },
  userADM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserADM",
    require: true,
  },
});
const Servicos = mongoose.model("Servicos", ServicosSchema);

export default Servicos;
