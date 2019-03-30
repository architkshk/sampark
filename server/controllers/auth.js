const JWT = require("jsonwebtoken");
const { User } = require("../models/user");
const { JWT_SECRET } = require("../config");

const signToken = user => {
  return JWT.sign(
    {
      iss: "asdfghj",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    JWT_SECRET
  );
};

module.exports = {
  signUp: async (req, res, next) => {
    let {
      name,
      email,
      password,
      age,
      city,
      state,
      address,
      diseases,
      interests,
      nationality,
      mobile
    } = req.body;

    const foundUser = await User.findOne({ mobile: mobile });
    if (foundUser) {
      return res.status(403).json({ error: "Mobile Number is already in use" });
    }
    const newUser = new User({
      name,
      email,
      password,
      age,
      city,
      state,
      address,
      diseases,
      interests,
      nationality,
      image: null,
      mobile
    });

    await newUser.save();
    const token = signToken(newUser);
    res.status(200).json({ token, user: newUser });
  },

  signIn: async (req, res, next) => {
    const token = signToken(req.user);
    res.status(200).json({ token, user: req.user });
  },

  loggedIn: async (req, res, next) => {
    res.json({ user: req.user.email });
  }
};
