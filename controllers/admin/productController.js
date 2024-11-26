const Product = require('../../models/Product');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).json({ message: 'Error fetching products' });
        res.render('admin/products', { products });
    });
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    Product.getById(id, (err, product) => {
        if (err) return res.status(500).json({ message: 'Error fetching product' });
        res.render('admin/productDetails', { product });
    });
};

exports.createProduct = (req, res) => {
    const { name, category_id, price, stock, tax_id } = req.body;
    Product.create({ name, category_id, price, stock, tax_id }, (err, productId) => {
        if (err) return res.status(500).json({ message: 'Error creating product' });
        res.redirect('/admin/products');
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, category_id, price, stock, tax_id } = req.body;
    Product.update(id, { name, category_id, price, stock, tax_id }, (err) => {
        if (err) return res.status(500).json({ message: 'Error updating product' });
        res.redirect('/admin/products');
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err) => {
        if (err) return res.status(500).json({ message: 'Error deleting product' });
        res.redirect('/admin/products');
    });
};
