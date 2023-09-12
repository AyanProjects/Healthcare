import md5 from "md5";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import User from "../api/users/model";
import Config from "../config";

const localStrategy = require("passport-local").Strategy;

export const password = () => (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ error: true, message: "Email and password are required." });
  }

  validateUser(req.body.email, req.body.password, (user) => {
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(401).send({ error: true, message: "Invalid Credentials" });
    }
  });
};

const validateUser = async (email, password, done) => {
  User.findOne({ email, password: md5(password) }, { password: 0 })
    .then((result) => {
      if (!result) {
        return done(false);
      }

      return done(result.toJSON());
    })
    .catch((err) => {
      console.log(err);

      return done(false);
    });
};

export const validateToken =
  ({ required } = {}) =>
  (req, res, next) =>
    passport.authenticate("token", { session: false }, (user) => {
      if (required && !user) {
        return res.status(401).send({ success: false, message: "Unauthorized access" }).end();
      }

      if (user) {
        return res.send({ success: true, message: "Valid Access", result: user }).end();
      }

      return res.status(401).send({ success: false, message: "Unauthorized access" }).end();
    })(req, res, next);

export const token = (req, res, next) =>
  passport.authenticate("token", { session: false }, (user) => {
    if (user) {
      req.user = user;
    } else {
      return res.status(401).send({ error: true, responseCode: 401, message: "Unauthorized access" }).end();
    }

    next();
  })(req, res, next);

passport.use(
  new localStrategy((email, password, done) => {
    User.findOne({ $or: [{ email }, { email }, { phone: email }] }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    });
  })
);

passport.use(
  "token",
  new JwtStrategy(
    {
      secretOrKey: Config.jwtSecret,
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromUrlQueryParameter("access_token"),
        ExtractJwt.fromBodyField("access_token"),
        ExtractJwt.fromAuthHeaderWithScheme("Bearer")
      ])
    },
    (tokenData, done) => {
      User.findOne({ _id: tokenData.id, email: tokenData.email }, { password: 0 })
        .then(async (resp) => {
          if (!resp) {
            done(false);
          } else {
            return done(resp.toJSON());
          }
        })
        .catch(() => done(false));
    }
  )
);
