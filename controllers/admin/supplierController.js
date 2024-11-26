const Supplier = require('../../models/Supplier');

exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('admin/suppliers', { suppliers });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getSupplierDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findById(id);
        res.render('admin/supplierDetails', { supplier });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
