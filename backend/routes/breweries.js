const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

// POST a new rating for a brewery
router.post('/:breweryId/ratings', async (req, res) => {
    const { breweryId } = req.params;
    const { value } = req.body;

    try {
        // Validate the rating value
        if (value < 1 || value > 5) {
            return res.status(400).json({ message: 'Rating value must be between 1 and 5' });
        }

        // Create a new rating document
        const newRating = new Rating({
            breweryId,
            value,
        });

        // Save the new rating
        await newRating.save();

        res.status(201).json({ message: 'Rating added successfully' });
    } catch (error) {
        console.error('Error adding rating:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET ratings for a specific brewery
router.get('/:breweryId/ratings', async (req, res) => {
    const { breweryId } = req.params;

    try {
        const ratings = await Rating.find({ breweryId });
        res.status(200).json(ratings);
    } catch (error) {
        console.error('Error fetching ratings:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
