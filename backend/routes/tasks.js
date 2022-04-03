const taskController = require('../controllers/task')
const router = require('express').Router()

router.post('/', taskController.createTask)
router.get('/', taskController.getTasks)

module.exports = router