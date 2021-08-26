const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    shoe_id: { type: Schema.Types.ObjectId, ref: 'shoe_id' }
  },
  { timestamps: true }
)

module.exports = User