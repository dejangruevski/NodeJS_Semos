const Kurs = require('../pkg/kurs/kursSchema');

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        kurs,
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
    let kursevi = await Kurs.find(query);

    res.status(200).json({
      status: 'success',
      total: kursevi.length,
      data: {
        kursevi,
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
    const kurs = await Kurs.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        kurs,
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
    const novKurs = await Kurs.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        kurs: novKurs,
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
    await Kurs.findByIdAndDelete(req.params.id);
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
    const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        kurs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
