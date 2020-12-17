const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
{
    type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name of the exercise"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    weight: {
        type: Number,
        required: "Enter weight"
    },
    reps: {
        type: Number,
        required: "Enter number of repetitions"
    },
    sets: {
        type: Number,
        required: "Enter number of sets"
    }
});

const Exercise = mongoose.model("Exercise", exercisechema);

module.exports = Exercise;
