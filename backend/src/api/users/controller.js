import md5 from "md5";
import Users from "./model";

export const createUser = async (req, res, next) => {
  try {
    const checkExist = await Users.findOne({
      email: req.body.email
    });

    if (!checkExist) {
      const { password, ...body } = req.body;
      await Users.create({ ...body, password: md5(password) });
      res.send({ message: "User created successfully" });
    } else {
      res.status(422).send({ message: "Email already exist" });
    }
  } catch (err) {
    next(err);
  }
};
