const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const cv = require('./data.json')

app.use(cors())

app.get('/cv', function (req, res) {
  res.send(cv)
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

module.exports = app