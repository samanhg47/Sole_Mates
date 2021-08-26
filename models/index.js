const mongoose = require('mongoose')
const ShoeSchema = require('./shoe')
const UserSchema = require('./user')

const Shoe = mongoose.model('shoes', ShoeSchema)
const User = mongoose.model('users', UserSchema)

module.exports = {
  Shoe,
  User
}