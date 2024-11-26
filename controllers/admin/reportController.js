exports.generateSalesReport = (req, res) => {
    try {
        // You can integrate your logic to generate the report
        res.render('admin/reports');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
