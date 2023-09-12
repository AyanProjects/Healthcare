import pharmacyItems from "./model";

export const getAll = (req, res) => {
  pharmacyItems
    .find({ ...req.query })
    .then((results) => {
      res.send({ success: true, message: "Success", result: results });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: "failed" });
    });
};

export const create = async (req, res, next) => {
  try {
    const result = await pharmacyItems.create({ ...req.query, ...req.body });
    res.send({ success: true, message: "Success", result });
  } catch (err) {
    next(err);
  }
};

export const deleteById = (req, res) => {
  pharmacyItems
    .findByIdAndDelete(req.params.id)
    .then((results) => {
      res.send({ success: true, message: "Success", result: results });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: "failed" });
    });
};

export const getById = async (req, res, next) => {
  try {
    const result = await pharmacyItems.findOne({ ...req.query, _id: req.params.id });
    res.send({ success: true, message: "Success", result });
  } catch (error) {
    next(error);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const query = { _id: req.params.id, ...req.query };
    const result = await pharmacyItems.findOneAndUpdate(query, req.body);
    res.send({ success: true, message: "Updated", result });
  } catch (err) {
    next(err);
  }
};
