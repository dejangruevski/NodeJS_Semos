const mongoose = require('mongoose');

const kursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  adress: {
    type: String,
    required: [true, 'Adress is required'],
  },
  area: {
    type: String,
    required: [true, 'Area is required'],
  },
});


const Kurs = mongoose.model('kurs', kursSchema);

module.exports = Kurs;
