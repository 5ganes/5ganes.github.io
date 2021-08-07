const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.post('/result', function (req, res, next) {
    let { name, age } = req.body;
    if (!name) name = 'Person';
    if (!age) age = 'Age';
    res.send(`Welcome ${name}, with age ${age}`);
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});