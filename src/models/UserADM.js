import mongoose from "mongoose";
import bcrypt from "bcrypt"

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

UserADMSchema.pre("save", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next(); //Função para seguir em frente.
});

const UserADM = mongoose.model("UserADM", UserADMSchema);

export default UserADM;
