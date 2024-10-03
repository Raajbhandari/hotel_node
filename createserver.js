const express = require('express'); // Correct express import
const mongoose = require('mongoose');
const db = require('./db.js'); // Ensure your MongoDB connection is configured here
const bodyParser = require('body-parser');
const person = require('./models/person'); // Make sure this model exists and is correct
const menu = require('./models/menu'); // Ensure the `menu` model is defined

const app = express(); // Correct initialization

// body-parser.json automatically parses JSON data from the request body and converts it into a JavaScript object which is then stored in req.body
app.use(bodyParser.json());

// Connect to MongoDB
// Uncomment and configure MongoDB connection here
/*
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected'))
.catch((err) => console.log('MongoDB connection failed', err));
*/

// Post route to add menu item
app.post('/menu', async (req, res) => {
  try {
    const data = req.body;
    const newdata = new menu(data); // Assuming `menu` is the correct model

    const response = await newdata.save();

    console.log('Saved data successfully');
    res.status(200).json({ message: 'All good' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Import routes after initialization
const personroutes = require('./routes/personroutes');
app.use('/person', personroutes);

const menuroutes=require('./routes/menuroutes')
app.use('/menu',menuroutes)

// Start server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
