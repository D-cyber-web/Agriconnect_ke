
const express = require('express');
const app = express();
const port = 3000; // Subject to change

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors());

// Connect database
const db = require('./database');

//API routes
app.use('/api', require('./api'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
