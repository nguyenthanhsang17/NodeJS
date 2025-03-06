module.exports.index = async (req, res) => {
    res.render('client/pages/products/products.pug', { pageTitle: "Trang danh sach san pham" })
}