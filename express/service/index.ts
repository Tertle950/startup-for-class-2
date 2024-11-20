const express = require('express');
//import uuid from 'uuid';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
