import Exercise from '../models/Exercise.js';

const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    const savedExercise = await exercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExerciseByID = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (exercise) {
      res.status(204);
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
    createExercise,
    getAllExercises,
    getExerciseByID,
    updateExercise,
    deleteExercise
  };