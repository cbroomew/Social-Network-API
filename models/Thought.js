const { Schema, model } = require('mongoose');
const responseSchema = require('./Response');

const thoughtSchema = new Schema(
  {
    content: { type: String, required: true, minlength: 1, maxlength: 280 },
    created: { type: Date, default: Date.now }, // Removed getter function
    author: { type: String, required: true },
    responses: [responseSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

thoughtSchema.virtual('responseCount').get(function () {
  return this.responses.length;
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
