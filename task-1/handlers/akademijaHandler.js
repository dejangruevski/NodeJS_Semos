const Akademija = require('../pkg/akademija/akademijaSchema');

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    const akademija = await Akademija.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        akademija,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let queryString = JSON.stringify(queryObj);
    
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    const query = JSON.parse(queryString);
    console.log(query);
    let akademii = await Akademija.find(query);

    res.status(200).json({
      status: 'success',
      total: akademii.length,
      data: {
        akademii,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    console.log(req.semos);
    const akademija = await Akademija.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        akademija,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const novaAkademija = await Akademija.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        akademija: novaAkademija,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Akademija.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

exports.replace = async (req, res) => {
  try {
    const akademija = await Akademija.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        akademija,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
