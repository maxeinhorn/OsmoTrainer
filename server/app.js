const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');
const compression = require('compression');

// app.use(bodyParser.json());
// app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})