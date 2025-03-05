const express = require('express');
const route = express.Router();

const controller = require('../../controller/client/product.controller.js');

route.get('/', controller.index);

route.get('/Create', async (req, res) => {
    res.render('client/pages/products/products.pug');
});

module.exports = route;