import { Strategy } from "passport-local";
const localStrategy = Strategy;
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// load user model
import User from "./models/User";

export default function(passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "email"
      },
      async (email, password, done) => {
        // match user
        const user = await User.findOne({ email: email });

        // if the user doesn't exists
        if (!user) {
          return done(null, false, { message: "El email no esta registrado." });
        }

        // match password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Contraseña incorrecta." });
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}
