const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  status: {
    type: String,
    enum: ['progress', 'success', 'stuck'],
    default: 'progress'
  },
  deadline: {
    type: Date,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  complete: {
    type: Boolean,
    default: false,
    required: true
  },
  description: {
    type: String,
  },
  used_tech: [String],
  likes: {
    type: [String],
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  assigned_users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema)