const express = require('express'); // npm run dev - to run nodemon
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/templates', express.static(path.join(__dirname, 'templates')));

app.use(express.urlencoded({ extended: false }));

const productList = [
    { id: 1, name: 'Dell Laptop', price: 800, description: 'It is good product It is good product It is good product' },
    { id: 2, name: 'Samsung Mobile', price: 750, description: 'It is good mobile' },
    { id: 3, name: 'Wireless Mouse', price: 30, description: 'very smooth' },
    { id: 4, name: 'MAC 1200 series', price: 2000, description: 'Awesome features and hardware Awesome features and hardware Awesome features and hardware' },
    { id: 5, name: 'Test Prodct Test Product', price: 12345, description: 'test description' }
];

const cartList = [
    { name: 'Samsung Mobile', price: 2250, quantity: 3 },
    { name: 'MAC 1200 series', price: 4000, quantity: 2 },
    { name: 'Test Prodct Test Product', price: 12345, quantity: 1 }
];

app.get('/', (req, res) => {
    res.render("product", {
        productList: productList
    });
});

app.get('/cartList', (req, res) => {
    res.render("shoppingcart", {
        cartList: cartList
    });
});

app.post('/addToCart', (req, res) => {
    // code for adding product in cart list
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});