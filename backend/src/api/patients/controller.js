import patients from "./model";

export const createUser = async (req, res, next) => {
  try {
    await patients.create(req.body);
    res.send({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export const getAll = (req, res) => {
  patients
    .find({})
    .then((results) => {
      res.send({ success: true, message: "Success", result: results });
    })
    .catch((err) => {
      res.status(500).send({ success: false, message: "failed" });
    });
};
