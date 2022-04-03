const projectController = require('../controllers/project')
const router = require('express').Router()

router.post('/', projectController.createProject)
router.put('/:projectId/users/:userId', projectController.assigneUser)
router.put('/:projectId/tasks/:taskId', projectController.addTask)
router.get('/', projectController.getProjects)

module.exports = router