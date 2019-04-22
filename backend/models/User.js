let mongoose = require('mongoose')

let Topic = require('./Topic')

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
    uniqueCaseInsensitive: false,
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  topics: {
    type: [String],
    default: ['entertainment', 'sports', 'politics', 'technology', 'business', 'science']
  }
})

module.exports = mongoose.model('User', userSchema)
