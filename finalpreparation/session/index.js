const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     if (!req.session.errors)
//         req.session.errors = [];
//     // if (!req.session.sessUsername)
//     //     req.session.sessUsername = '';
//     next();
// });

// app.get('/login', (req, res) => {
//     let errorList = req.session.errors;
//     req.session.errors = [];
//     res.render('index', {
//         'errors': errorList
//     });
// });

// app.post('/login', (req, res) => {
//     if (req.body.username != 'test')
//         req.session.errors.push('incorrect username');
//     if (req.body.password != '123')
//         req.session.errors.push('incorrect password');
//     if (req.session.errors.length > 0)
//         res.redirect(303, '/login');
//     else {
//         req.session.sessUsername = req.body.username;
//         res.redirect(303, '/welcome');
//     }
// });

// app.get('/welcome', (req, res) => {
//     if (!req.session.sessUsername) {
//         req.session.errors.push('please login first');
//         res.redirect(303, '/login');
//     }
//     res.render('welcome', {
//         'username': req.session.username
//     });
// });

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/stateProvince', (req, res) => {
    let result = [
        { "code": "code1", "name": "State1" },
        { "code": "code2", "name": "State2" }
    ];
    return res.send(JSON.stringify(result));
});

app.listen(3000, () => {
    console.log('server is runnig at port 3000');
});
