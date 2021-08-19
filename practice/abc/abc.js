const express = require('express'); // npm run dev - to run nodemon
const path = require('path');
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: false }));

const data = [
    {
        "cpu": "8 core 4Ghz",
        "ram": "16GB",
        "storage": "4TB NVME",
        "price": "$1500"
    },
    {
        "cpu": "Intel",
        "ram": "8GB",
        "storage": "1TB",
        "price": "$1200"
    },
    {
        "cpu": "Pentium",
        "ram": "32GB",
        "storage": "8TB NVME",
        "price": "$2000"
    }
];
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/computers/:id', (req, res) => {
    return res.send(data[req.params.id - 1]);
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});