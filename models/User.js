const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    user: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, match: [/.+@.+\..+/, 'Invalid email format'] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);
module.exports = User;
