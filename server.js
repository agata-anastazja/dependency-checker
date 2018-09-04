const express = require('express');
const path = require('path');
const getDependencies = require('../src/get_dependencies');

const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/api/dependencies',
  getDependencies
);


app.listen(port, () => console.log(`Listening on port ${port}`));
