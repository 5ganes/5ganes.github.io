const express = require("express");
const app = express();

app.use(express.urlencoded({ "extended": false }));

textList = [];

app.get("/", (req, res) => {
    let textListString = '';
    if (textList.length > 0) {
        textListString = '<ul>';
        for (let text of textList) {
            textListString += `<li>${text}</li>`;
        }
        textListString += '</ul>';
    }
    res.send(`<a href='add'>Add Text</a><br><br><label>List of Submitted Texts</label>${textListString}`);
});
app.get("/add", (req, res) => {
    res.send(`<form method="POST">
                <input name="textName">
                <input type="submit" name="submit" value="Submit">
            </form>`);
});
app.post("/add", (req, res) => {
    textList.push(req.body.textName);
    res.redirect('/');
});
app.listen(3000, () => {
    console.log("Server running at port 3000.");
});