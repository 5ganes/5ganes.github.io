const express = require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ "extended": false }));

list = [];

app.get("/", (req, res) => {

    res.render("index", {
        list: list
    });
});
app.get("/add", (req, res) => {
    res.render("addform");
});
app.post("/add", (req, res) => {
    list.push(req.body.textName);
    res.redirect(303, '/');
});
app.listen(3000, () => {
    console.log("Server running at port 3000.");
});