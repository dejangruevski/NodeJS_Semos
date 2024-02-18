const cityModel = require('../models/cityModel');

exports.getAddCity = (req, res) => {
  res.render('city');
};

exports.postAddCity = async (req, res) => {
  const data = {
    name: req.body.name,
    state: req.body.state,
    
  };
  await cityModel.add(data);
  res.redirect('/cityList');
};

exports.getListCities = async (req, res) => {
  const data = await cityModel.list();
  res.render('cities', { data });
};

exports.getCityDelete = async (req, res) => {
  //! SO req.params IMAME PRISTAP KON SITE DINAMICKI RUTI
  console.log(req.params.city);
  await cityModel.remove(req.params.city);
  res.redirect('/cityList');
};