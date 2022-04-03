const userController = require('../controllers/user')
const router = require('express').Router()

router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.put('/:userId/friends/:friendId', userController.addFriend)
router.put('/:userId/projects/:projectId', userController.assignProject)
router.put('/:userId/tasks/:taskId', userController.assignTask)

module.exports = router
