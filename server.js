const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/api/dependencies', (req, res) => {
  res.send({ express: 'Dependencies tree' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
