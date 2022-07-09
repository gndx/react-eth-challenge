const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001
const app_name = 'React-Eth-Challenge'

// where ever the built package and static files are
const buildFolder = 'build';

app.use(express.static(path.join(__dirname, buildFolder)))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, buildFolder, 'index.html'));
});

app.listen(port, () => console.log(app_name, "Listening on Port", port)) 
