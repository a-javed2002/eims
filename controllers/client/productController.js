const Product = require('../../models/Product');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).json({ message: 'Error fetching products' });
        res.render('client/products', { products });
    });
};

exports.getProductDetails = (req, res) => {
    const { id } = req.params;
    Product.getById(id, (err, product) => {
        if (err) return res.status(500).json({ message: 'Error fetching product details' });
        res.render('client/productDetails', { product });
    });
};
