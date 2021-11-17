import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";
import { User } from "../models/User.js";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// Middleware for authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "rentall",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

// Middleware authentication local strategy
// using username and password for login
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      // If error
      if (err) {
        return done(err);
      }
      // If no user exist
      if (!user) {
        return done(null, false);
      }
      // check if password is correct
      user.comparePassword(password, done);
    });
  })
);

export default passport;
