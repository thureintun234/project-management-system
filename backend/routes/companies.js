const companyController = require('../controllers/company')
const router = require('express').Router()

router.post('/', companyController.createCompany)
router.get('/', companyController.getCompanies)

module.exports = router