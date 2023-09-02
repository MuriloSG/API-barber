import mongoose from "mongoose";

//Importando bcrypt, comando no terminal npm i brcypt.
import bcrypt from "bcrypt"

//Criando schema Usuarios Administradores.
const UserADMSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
  telefone: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

//Funçào para fazer alteraçoes antes de enviar para o banco de dados.
UserADMSchema.pre("save", async function (next) {
  //Criptografando a senha do usuario.
  this.senha = await bcrypt.hash(this.senha, 10);
  next(); //Função para seguir em frente.
});

//Definindo Schema Usuario administrador.
const UserADM = mongoose.model("UserADM", UserADMSchema);

export default UserADM;
