//? DA SE KREIRA TODO APLIKACIJA
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

let beleski = [];

app.get('/', (req, res) => {
  res.render('index', {beleski});
});

app.post('/dodajBeleska', (req, res) => {
  let novaBeleska = req.body.beleska;
  beleski.push(novaBeleska);
  res.render('index', {beleski});
});

app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});

