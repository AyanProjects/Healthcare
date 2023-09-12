import accompanies from "./model";

export const create = async (req, res, next) => {
  try {
    const result = await accompanies.create({ ...req.query, ...req.body });
    res.send({ success: true, message: "Success", result });
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const result = await accompanies.findOne({ ...req.query, _id: req.params.id });
    res.send({ success: true, message: "Success", result });
  } catch (error) {
    next(error);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const query = { _id: req.params.id, ...req.query };
    const result = await accompanies.findOneAndUpdate(query, req.body);
    res.send({ success: true, message: "Updated", result });
  } catch (err) {
    next(err);
  }
};
