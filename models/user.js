const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    shoe_ids: { type: Schema.Types.ObjectId, ref: 'shoe_ids' }
  },
  { timestamps: true }
)

module.exports = User