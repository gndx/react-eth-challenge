const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const resume = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send(resume);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = app;
