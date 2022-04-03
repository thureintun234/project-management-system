const User = require('../models/user')
const bcrypt = require('bcrypt')
const Company = require('../models/company')

exports.createUser = async (req, res) => {
  const body = req.body

  const company = await Company.findById(body.company)

  const saltsRound = 10
  const hashedPassword = await bcrypt.hash(body.password, saltsRound)

  const newUser = new User({
    username: body.username,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: hashedPassword,
    active: body.active,
    company: body.company
  })

  const savedUser = await newUser.save()

  // add user to company
  company.members = company.members.concat(savedUser)
  await company.save()

  res.json(savedUser)
}

exports.addFriend = async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  )
  res.json(updatedUser)
}

exports.assignProject = async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { assigned_projects: req.params.projectId } },
    { new: true }
  )
  res.json(updatedUser)
}

exports.assignTask = async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { assigned_tasks: req.params.taskId } },
    { new: true }
  )
  res.json(updatedUser)
}

exports.getUsers = async (req, res) => {
  const users = await User.find({}).populate('company', { name: 1 })
  res.json(users)
}