import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
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
  Nomeusuario: {
    type: String,
    required: true,
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

UserSchema.pre("save", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});
const User = mongoose.model("User", UserSchema);

export default User;
