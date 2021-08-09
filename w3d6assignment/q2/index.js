const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/result', function (req, res, next) {
    let { name, age } = req.body;
    if (!name) name = 'Unknown';
    if (!age) age = 'Unknown';
    res.render('result', { name, age });
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});