import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
