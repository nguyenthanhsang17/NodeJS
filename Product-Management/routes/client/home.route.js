const express = require('express');
const route = express.Router();

const controller = require('../../controller/client/home.controller.js');

route.get('/', controller.home);

module.exports = route;