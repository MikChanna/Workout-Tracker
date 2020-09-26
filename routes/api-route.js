const router = require("express").Router();
const Workout = require("../models/workouts");

// api to get all workouts sorted by date in ascending order
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: 1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// api to post new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log(req.body);
      console.log(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const workoutId = req.params.id;
  Workout.findByIdAndUpdate(
    workoutId,
    {
      $push: { exercise: req.body },
      $inc: { totalDuration: req.body.duration },
    },
    {
      new: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((error) => {
      res.status(400).json(err);
    });
});

module.exports = router;
