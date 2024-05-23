const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    breweryId: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    // Other fields if needed
}, {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
