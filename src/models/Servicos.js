import mongoose from "mongoose";

//Criando schema serviços.
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
  userADM: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserADM",
    require: true,
  },
});

//Definindo Schema.
const Servicos = mongoose.model("Servicos", ServicosSchema);

export default Servicos;
