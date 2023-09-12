import Promise from "bluebird";
import jwt from "jsonwebtoken";
import Config from "../config";

const jwtSign = Promise.promisify(jwt.sign);
const jwtVerify = Promise.promisify(jwt.verify);

export const sign = (user, options, method = jwtSign) => method(user, Config.jwtSecret, options);

export const signSync = (id, options) => sign(id, options, jwt.sign);

export const verify = (token) => jwtVerify(token, Config.jwtSecret);
