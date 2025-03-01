const User = require('../models/User');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getOneUser(req, res) {
    User.findById(req.params.id)
      .populate('thoughts friends')
      .then((user) => user ? res.json(user) : res.status(404).json({ msg: 'User not found' }))
      .catch((err) => res.status(500).json(err));
  },

  addUser(req, res) {
    console.log("Received Headers:", req.headers); // Log request headers
    console.log("Received Body:", req.body); // Log request body
  
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).json(err);
      });
  },
  

  editUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  removeUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json({ msg: 'User deleted' }))
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  removeFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
