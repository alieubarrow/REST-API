import express from 'express';
import connectDB from './db/connectdb.js';
import {
  createExercise,
  getAllExercises,
  getExerciseByID,
  updateExercise,
  deleteExercise,
} from './controllers/exerciseController.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/exercises', createExercise);
app.get('/exercises', getAllExercises);
app.get('/exercises/:id', getExerciseByID);
app.put('/exercises/:id', updateExercise);
app.delete('/exercises/:id', deleteExercise);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECT_STRING);
    console.log('Connected to Database');
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
