const Thought = require('../models/Thought');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getOneThought(req, res) {
    Thought.findById(req.params.id)
      .then((thought) => thought ? res.json(thought) : res.status(404).json({ msg: 'Thought not found' }))
      .catch((err) => res.status(500).json(err));
  },

  addThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  editThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  removeThought(req, res) {
    Thought.findByIdAndDelete(req.params.id)
      .then(() => res.json({ msg: 'Thought deleted' }))
      .catch((err) => res.status(500).json(err));
  },

  addResponse(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { responses: req.body } },
      { new: true }
    )
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  removeResponse(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { responses: { responseId: req.params.responseId } } },
      { new: true }
    )
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};
