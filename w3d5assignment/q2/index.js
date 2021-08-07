const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.post('/result', function (req, res, next) {
    let result = req.body;
    if (!result.name)
        result.name = 'Person';
    if (!result.age)
        result.age = 'Age';
    res.send(`Welcome ${result.name}, with age ${result.age}`);
});

app.listen(3000, () => {
    console.log("Server running at port 3000.")
});