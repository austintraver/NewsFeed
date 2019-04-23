const mongoose = require('mongoose')
const Schema = mongoose.Schema

function buildModel(name, schema) {
  return mongoose.model(name, new Schema(schema, {timestamps: true}))
}

// also contained "updatedAt" and "createdAt"
const User = buildModel('User', {
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
  topic: {
    type: [String],
    default: ['entertainment', 'sports', 'politics', 'technology', 'business', 'science']
  }
})

module.exports.User = User
