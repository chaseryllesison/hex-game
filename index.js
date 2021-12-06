const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('landingPage');
});

app.get('/game/:difficulty', (req, res) => {
    const difficulty = req.params.difficulty;
    res.render('game', {difficulty});
});

app.listen(port,() => {
    console.log(`serving on port ${port}`);
});