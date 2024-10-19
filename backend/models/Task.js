// server/models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    // Additional fields can be added here
}, {
    timestamps: true,
});

module.exports = mongoose.model('Task', TaskSchema);
