const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nguyenthanhsang17102002:sang17102002*@cluster0.3h1wx.mongodb.net/Sang?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!, sang'));

  

  const Product = mongoose.model('Product', {
    id: Number,
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    thumbnail: String
  }, 'Product');
  

  mongoose.connection.on('connected', () => {
    console.log('Kết nối thành công với MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Lỗi kết nối:', err);
  });
  

const app = express();
const port = 3000;

app.set('views', './views');  // Chỉ định đúng thư mục chứa layout
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index-test', { title: 'Hey', message: 'Hello there!' });
});

app.get('/Products', async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      console.log('Không có sản phẩm nào trong cơ sở dữ liệu');
      res.send('<h1>Không có sản phẩm nào</h1>');
    } else {
      console.log(products);
      res.render('product', {product: products });
    }
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    res.status(500).send('Có lỗi khi truy vấn cơ sở dữ liệu');
  }
});

app.get('/sang', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/about', (req, res) => {
  console.log("tue ham !!!!");
  res.send('<h1>Hello World! 123 me ham</h1>');
});

app.get('/homepage', (req, res) => {
  res.render('layouts/default');
});

app.get('/page1', (req, res) => {
  //res.render('Page1.pug'); 
  res.render('Page1.pug', { title: 'Hey', message: 'Hello there!' }); 
});

app.get('/page2', (req, res) => {
  res.render('Page2.pug');  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
