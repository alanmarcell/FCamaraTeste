// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called fcteste
mongoose.connect("mongodb://admin:admin@jello.modulusmongo.net:27017/d7Ojirex");
// Create a schema
var ProductSchema = new mongoose.Schema({
    product: String,
    price: Number,
    category: String
});
// Create a model based on the schema
var Product = mongoose.model('Product', ProductSchema);



// Create a documents on the db
Product.create({
    product: "Martelo",
    price: 10,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Maçarico",
    price: 375,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Chave de Fenda",
    price: 12,
    category: "Ferramentas"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Celular",
    price: 999.99,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Notebook",
    price: 2000,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "TV",
    price: 3500,
    category: "Eletrônicos"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Batedeira",
    price: 190,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Liquidificador",
    price: 99,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });

    Product.create({
    product: "Fogão",
    price: 500,
    category: "Utensílios"
},
    function (err, todo) {
        if (err) console.log(err);
        else console.log(todo);
    });
