const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['progress', 'success', 'stuck'],
    default: 'progress'
  },
  due_date: {
    type: Date,
    required: true
  },
  used_tech: [String],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)