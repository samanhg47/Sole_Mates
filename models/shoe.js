const { Schema } = require('mongoose')

const Shoe = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Shoe