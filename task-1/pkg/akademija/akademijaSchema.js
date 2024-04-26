const mongoose = require('mongoose');

const akademijaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  adress: {
    type: String,
    required: [true, 'Adress is required'],
  }
});


const Akademija = mongoose.model('akademija', akademijaSchema);

module.exports = Akademija;
