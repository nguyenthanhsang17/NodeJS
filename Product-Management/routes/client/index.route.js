const productroute = require('./product.route');
const Homepage = require('./home.route');
module.exports = (app) =>{
    app.use('/', Homepage);
    
    app.use('/Products', productroute);
}