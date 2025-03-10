const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const route = require('./routes/client/index.route.js');
//sang
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
