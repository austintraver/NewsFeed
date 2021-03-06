const mongoose = require('mongoose')
const Schema = mongoose.Schema

function buildModel(name, schema) {
  return mongoose.model(name, new Schema(schema, {timestamps: true}))
}

// also contained "updatedAt" and "createdAt"
const Comment = buildModel('Comment', {
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

module.exports = Comment
