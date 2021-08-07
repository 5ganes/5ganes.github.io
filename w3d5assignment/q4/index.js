const express = require('express');
const app = express();
const path = require('path');

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.get('/output', (req, res) => {
    res.send(`Welcome ${req.query.name}, with age ${req.query.age}`);
});

app.post('/result', function (req, res, next) {
    let result = req.body;
    if (!result.name)
        result.name = 'Person';
    if (!result.age)
        result.age = 'Age';
    res.redirect(`/output?name=${result.name}&age=${result.age}`);
});

app.listen(3000, () => {
    console.log("Server running at port 3000.")
});