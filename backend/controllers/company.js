const Company = require('../models/company')

exports.createCompany = async (req, res) => {
  const body = req.body

  const newCompany = new Company({
    name: body.name,
  })

  const savedCompany = await newCompany.save()
  res.json(savedCompany)
}

exports.getCompanies = async (req, res) => {
  const companies = await Company.find({}).populate('projects', { name: 1 }).populate('members', { username: 1 })
  res.json(companies)
}