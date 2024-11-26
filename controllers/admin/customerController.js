const Customer = require('../../models/Customer');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.render('admin/customers', { customers });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCustomerDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById(id);
        res.render('admin/customerDetails', { customer });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
