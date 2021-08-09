const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const path = require('path');
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(cookieParser());

app.get('/', (req, res) => {
    // console.log(req.cookies);
    res.render('addcookie', {
        'cookieList': req.cookies
    });
});

app.post('/', (req, res) => {
    res.cookie(req.body.key, req.body.value, { maxAge: 1000 * 60 * 10 });
    res.redirect(303, '/');
});

app.listen(3000, () => {
    console.log('Server running at port 3000...');
});
