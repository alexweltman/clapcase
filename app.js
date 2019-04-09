'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Working!'))
app.get('/clapcase', (req, res) => {
    if (!req.query.string) {
        res.status(400);
        res.send('no empty strings allowed');
    }

    res.send(req.query.string.split(' ').join(':clap:'));
});

const port = process.env.PORT || 8000
app.listen(port, () => 
  console.log(`Server is listening on port ${port}.`)
)
