'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Working!'));

app.post('/clapcase', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    console.log(req.body);

    const text = req.body.text.split(' ').join(':clap:');

    res.json({text});
});

const port = process.env.PORT || 8000
app.listen(port, () => 
  console.log(`Server is listening on port ${port}.`)
)
