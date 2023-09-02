import mongoose from "mongoose";

const connectDataBase = () => {
  console.log("Estamos conectando");

  mongoose
    .connect(
      process.env.MONGODB_URI,
      { UseNewUrlParser: true, useUnifiedtopology: true }
    )
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDataBase;
