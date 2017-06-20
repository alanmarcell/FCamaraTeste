// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called fcteste
mongoose.connect("mongodb://localhost:27017/h4graphql");
// Create a schema
var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});
// Create a model based on the schema
var Product = mongoose.model('Product', ProductSchema);



// Create a documents on the db
Product.create({
    name: "Martelo",
    price: 10,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Maçarico",
    price: 375,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Chave de Fenda",
    price: 12,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Celular",
    price: 999.99,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Notebook",
    price: 2000,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "TV",
    price: 3500,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Batedeira",
    price: 190,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Liquidificador",
    price: 99,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    name: "Fogão",
    price: 500,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });
