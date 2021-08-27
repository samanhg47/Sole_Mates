const mongoose = require('mongoose')
const ShoeSchema = require('./shoe')

const Shoe = mongoose.model('shoes', ShoeSchema)

module.exports = {
  Shoe
}