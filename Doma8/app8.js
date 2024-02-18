const express = require('express');
const cities = require('./controllers/cities');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/cityAdd', cities.getAddCity); 
app.post('/cityAdd', cities.postAddCity); 
app.get('/cityList', cities.getListCities);
app.get('/cityDelete/:city', cities.getCityDelete);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Server successfully started on port 10000');
});
