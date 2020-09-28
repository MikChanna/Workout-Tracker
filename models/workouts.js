const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// model for workout schema
const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Select type",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter a excercise name",
      },
      distance: {
        type: Number,
        trim: true,
        required: "Enter a distance value",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter a duration value",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter a weight value",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter a value",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter a value",
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    trim: true,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
