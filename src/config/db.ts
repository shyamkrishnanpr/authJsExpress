import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const db: string = "mongodb+srv://shyamkrishnasby:9847848779@cluster0.zynk5xc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(db, {});
    console.log(`Database connected:`);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;