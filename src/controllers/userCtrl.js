const userCtrl = {};
// importing bcrypt library
import bcrypt from "bcryptjs";

// importing the admin controller
import User from "../models/User";



userCtrl.register = async (req, res) => {
  // destructuring the data
  const { name, email, password, password2, admincode } = req.body;

  let errors = [];

  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ message: "Por favor, llene todos los campos." });
  }

  // check the password match
  if (password !== password2) {
    errors.push({ message: "Las contraseñas no coinciden." });
  }

  // check the password length
  if (password.length < 8) {
    errors.push({ message: "La contraseña debe tener al menos 8 caracteres." });
  }

  if (errors.length > 0) {
    return res.json(errors);
  } else {
    // check if the user exists
    const user = await User.findOne({ email: email });

    if (user) {
      errors.push({ message: "El usuario ya existe." });
    } else {
      const newUser = new User({ name, email, password });

      if (admincode === "mysecretadmincode") {
        newUser.isAdmin = true;
      }

      // encrypting the password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt);

      newUser.password = hash;

      // saving user
      await newUser.save();

      res.json({ message: "User Created", user: newUser });
    }
  }
};

userCtrl.login = (req, res) => {
    res.json({message: 'Logged In', user: req.user})
}

userCtrl.logout = (req, res) => {
    req.logout();
    res.json({message: "Logged out!"})
}

export default userCtrl;
