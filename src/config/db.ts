import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db: any = process.env.MONGO_URI;
    await mongoose.connect(db, {});
    console.log(`Database connected:`);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
