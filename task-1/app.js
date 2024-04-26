const express = require('express');
const db = require('./pkg/db/index');

const akademija = require('./handlers/akademijaHandler');
const kurs = require('./handlers/kursHandler');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.init();

app.get('/akademija', akademija.getAll);
app.get('/akademija/:id', akademija.getOne);
app.post('/akademija', akademija.create);
app.patch('/akademija/:id', akademija.update);
app.delete('/akademija/:id', akademija.delete);
app.put('/akademija/:id', akademija.replace);

app.get('/kurs', kurs.getAll);
app.get('/kurs/:id', kurs.getOne);
app.post('/kurs', kurs.create);
app.patch('/kurs/:id', kurs.update);
app.delete('/kurs/:id', kurs.delete);
app.put('/kurs/:id', kurs.replace);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log('Could not start service');
  }
  console.log(`Service started successfully on port ${process.env.PORT}`);
});


