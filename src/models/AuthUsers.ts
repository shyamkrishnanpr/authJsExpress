
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  provider: { type: String }, 
  providerId: { type: String }, 
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;  
