const Inventory = require('../../models/Inventory');

exports.getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.render('admin/inventory', { inventory });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        await Inventory.findByIdAndUpdate(id, { quantity });
        res.redirect('/admin/inventory');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
