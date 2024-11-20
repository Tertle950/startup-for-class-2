var express = require('express');
//import uuid from 'uuid';
var app = express();
app.get('/', function (_req, res) {
    res.send('Hello world!');
});
var PORT = process.argv.length > 2 ? process.argv[2] : 3000;
// JSON body parsing using built-in middleware
app.use(express.json());
// Serve up the front-end static content hosting
app.use(express.static('public'));
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
