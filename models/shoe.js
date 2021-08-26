const { Schema } = require('mongoose')

const Shoe = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Shoe