const express = require('express');

// load .env for config vars
require('dotenv').config();

const connectDB = require('./utils/db_loader');

// create app
app = express();

// connect to database
connectDB();

// to support serialization / deserialization
app.use(express.json());
app.use('/api', require('./routes/api'));

app.get('/', async (req, res) => {
    res.send('Hello! this is a express server');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () =>
    console.log(`Server started on port ${PORT}`)
);
