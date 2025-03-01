const { Schema, Types } = require('mongoose');

const responseSchema = new Schema(
  {
    responseId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    text: { type: String, required: true, maxlength: 280 },
    user: { type: String, required: true },
    timestamp: { type: Date, default: Date.now } 
  }
);

module.exports = responseSchema;
