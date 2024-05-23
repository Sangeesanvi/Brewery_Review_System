const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const ratingRoutes = require('./routes/breweries'); // Corrected import statement
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://sangeethabk:fuTKg2vXxv2IAAcp@cluster0.s2ftljy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Routes
app.use('/auth', authRoutes);
app.use('/ratings', ratingRoutes); // Mounting the rating routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
