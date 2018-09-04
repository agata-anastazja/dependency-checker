const express = require('express');
const routes = require('./routes/index');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
