const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.use(session({
    secret: 'salt123',
    cookie: { maxAge: 600000 }
}));

app.use((req, res, next) => {
    if (!req.session.data)
        req.session.data = {};
    next();
});

let style = '';
const date = new Date();
const hour = date.getHours();
if (hour >= 6 && hour <= 18) style = 'day';
else style = 'night';

app.get('/', (req, res) => {
    // console.log(`Welcome ${req.session.data['name']}, with age ${req.session.data['age']}`);
    res.render('form', {
        style: style
    });
});

app.get('/output', (req, res) => {
    res.send(`Welcome ${req.session.data['name']}, with age ${req.session.data['age']}`);
});

app.post('/result', function (req, res) {
    let { name, age } = req.body;
    if (!name) name = 'Unknown';
    if (!age) age = 'Unknown';
    req.session.data['name'] = name;
    req.session.data['age'] = age;
    res.redirect(303, '/output');
});

app.listen(3000, () => {
    console.log("Server running at port 3000.")
});