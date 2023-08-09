const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = require("../models/Users");
const WorkerProfiles = require("../models/WorkerProfiles");

// ===================== read ====================== //;
const login = async (req, res) => {
  try {
    const foundUser = await Users.findOne({
      username: req.body.username.toLowerCase(),
    });

    const foundProfile = await WorkerProfiles.findOne({
      account_id: foundUser.account_id,
    });

    const result = await bcrypt.compare(req.body.password, foundUser.password);

    if (foundUser) {
      // added in to compare bcrypt password instead
      if (result) {
        // if (foundUser.password === req.body.password) {

        // create payload
        const payload = {
          id: foundUser.account_id,
          persona: foundUser.user_type,
        };

        // create access token
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "20m",
          jwtid: uuidv4(),
        });

        // create refresh token
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
          expiresIn: "30d",
          jwtid: uuidv4(),
        });

        if (foundProfile) {
          const response = {
            status: "ok",
            message: "login successful",
            id: foundUser.account_id,
            persona: foundUser.user_type,
            accessToken,
            refreshToken,
          };

          res.json(response);
        } else {
          const response = {
            status: "incomplete",
            message: "login successful, no profile found",
            id: foundUser.account_id,
            persona: foundUser.user_type,
            accessToken,
            refreshToken,
          };
          res.json(response);
        }

        // res.json({
        //   status: "ok",
        //   message: "login successful",
        //   id: foundUser.account_id,
        //   persona: foundUser.user_type,
        // });
      } else {
        res.json({ status: "error", message: "invalid username or password" });
      }
    } else {
      res.json({ status: "error", message: "invalid username or password" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ status: "error", message: "failed to login" });
  }
};

// ===================== create ====================== //;

const create = async (req, res) => {
  console.log(req.body);
  try {
    const found = await Users.findOne({
      username: req.body.username.toLowerCase(),
    });

    if (found === null) {
      const newId = uuidv4();

      // add in bcrypt to password when creating account
      const password = await bcrypt.hash(req.body.password, 12);

      // create payload
      const payload = {
        id: newId,
        persona: req.body.user_type,
      };

      // create access token
      const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
        expiresIn: "20m",
        jwtid: uuidv4(),
      });

      // create refresh token
      const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
        expiresIn: "30d",
        jwtid: uuidv4(),
      });

      await Users.create({
        account_id: newId,
        username: req.body.username.toLowerCase(),
        password: password,
        user_type: req.body.user_type,
      });

      const response = {
        status: "ok",
        message: "user created successfully",
        id: newId,
        persona: req.body.user_type,
        accessToken,
        refreshToken,
      };
      res.json(response);
    } else {
      res.json({ status: "error", message: "username taken" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ status: "error", message: "failed to create user" });
  }
};
// ===================== update ====================== //;
// ===================== delete ====================== //;

module.exports = {
  login,
  create,
};
