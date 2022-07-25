import users from "../models/User.js";

class UserController {
  static getUser = (req, res) => {
    users.find().exec((err, users) => {
      res.status(200).json(users);
    });
  };

  static getUserById = (req, res) => {
    const id = req.params.id;
    users.findById(id).exec((err, users) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - User not founded.` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static createUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err} - Failure creating an user.` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static updateUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "User update successfuly" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "User deleted!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default UserController;
