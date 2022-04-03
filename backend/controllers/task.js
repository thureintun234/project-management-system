const Task = require('../models/task')
const Project = require('../models/project')

exports.createTask = async (req, res) => {
  const body = req.body

  const project = await Project.findById(body.project)

  const newTask = new Task({
    name: body.name,
    status: body.status,
    due_date: body.due_date,
    used_tech: body.used_tech,
    project: body.project
  })

  const savedTask = await newTask.save()
  project.tasks = project.tasks.concat(savedTask)
  await project.save()

  res.json(savedTask)
}

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({}).populate('project', { name: 1 })
  res.json(tasks)
}