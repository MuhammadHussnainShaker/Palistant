import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  // connect to MongoDB Atlas
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(
      `FOLLOWING ERROR OCCURRED WHILE CONNECTING TO MONGODB DATABASE: ${error}`
    );
    process.exit(1);
  }
};

export default connectDB;
