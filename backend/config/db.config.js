import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("DataBase Connected Successfully", connection.connection.host);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default connectDB;
