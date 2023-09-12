import { sign } from "../../services/jwt";

export const login = async ({ user }, res, next) => {
  try {
    const token = await sign({
      id: user.id,
      email: user.email
    });

    res.send({ token, userData: user, message: "Login successfully" });
  } catch (error) {
    next(error);
  }
};
