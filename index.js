const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

const port = 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('landingPage');
});

app.get('/game', (req, res) => {
    res.render('game');
});

app.listen(port,() => {
    console.log(`serving on port ${port}`);
});