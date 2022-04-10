const Project = require('../models/project')
const Company = require('../models/company')
const User = require('../models/user')
const Task = require('../models/task')

exports.createProject = async (req, res) => {
  const body = req.body

  const company = await Company.findById(body.company)
  const user = await User.findById(body.user)

  const newProject = new Project({
    name: body.name,
    status: body.status,
    deadline: body.deadline,
    company: body.company,
    complete: body.complete,
    description: body.description,
    used_tech: body.used_tech,
    user: body.user,
  })

  const savedProject = await newProject.save()

  // add project to company
  company.projects = company.projects.concat(savedProject)
  await company.save()

  // add project to user
  user.projects = user.projects.concat(savedProject)
  await user.save()

  res.json(savedProject)
}

exports.assigneUser = async (req, res) => {
  const updatedProject = await Project.findOneAndUpdate(
    { _id: req.params.projectId },
    { $addToSet: { assigned_users: req.params.userId } },
    { new: true }
  )
  const user = await User.findById(req.params.userId)
  user.assigned_projects = user.assigned_projects.concat(updatedProject)
  await user.save()
  res.json(updatedProject)
}

exports.addTask = async (req, res) => {
  const updatedProject = await Project.findOneAndUpdate(
    { _id: req.params.projectId },
    { $addToSet: { tasks: req.params.taskId } },
    { new: true }
  )
  const task = await Task.findById(req.params.taskId)
  task.project = updatedProject;
  await task.save()
  res.json(updatedProject)
}

exports.getProjects = async (req, res) => {
  const projects = await Project.find({})
    .populate('company', { name: 1 })
    .populate('tasks', { name: 1, status: 1 })
    .populate('assigned_users', { username: 1, email: 1, company: 1 })
  res.json(projects)
}