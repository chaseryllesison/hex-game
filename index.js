const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

const port = process.env.PORT || 3000;

Math.floor(Math.random()*16777215).toString(16);
app.use(express.static(__dirname + '/public'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('landingPage');
});

app.get('/game/:difficulty', (req, res) => {
    const difficulty = req.params.difficulty;
    const randomColors = [];
    for(var i=0; i<difficulty*3; i++){
        randomColors.push([...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''));
    }
    const pickedColorIndex = Math.floor(Math.random() * randomColors.length);
    res.render('game', {difficulty, randomColors, pickedColorIndex});
});

app.listen(port,() => {
    console.log(`serving on port ${port}`);
});