const express = require('express');
const app = express();
const path = require('path');
const url = require('url');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    const pages = [
        {title: "Add Character", url: "./addCharacter"},
        {title: "Add Race", url: "./addRace"},
        {title: "Add Role", url: "./addRole"}
    ];
    res.render('homepage', { title: 'homepage', pages });
})

app.get('/addCharacter', (req, res) => {
    res.render('addCharacter', { title: 'Add Character'});
})

app.get('/addRace', (req, res) => {
    res.render('addRace', { title: 'Add Race'});
})

app.get('/addRole', (req, res) => {
    res.render('addRole', { title: 'Add Role'});
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});