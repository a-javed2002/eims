const Order = require('../../models/Order');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('customer product');
        res.render('admin/orders', { orders });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getOrderDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('customer product');
        res.render('admin/orderDetails', { order });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await Order.findByIdAndUpdate(id, { status });
        res.redirect(`/admin/orders/${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
