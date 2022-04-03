const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const companyRouters = require('./routes/companies')
const userRouters = require('./routes/users')
const projectRouters = require('./routes/projects')
const taskRouters = require('./routes/tasks')

mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info(`MongoDB connected successfully`))
  .catch(err => logger.error(`Mongo connection error ${err}`))

// express middleware
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

// routes
app.use('/api/companies', companyRouters)
app.use('/api/users', userRouters)
app.use('/api/projects', projectRouters)
app.use('/api/tasks', taskRouters)

// error handler middlewares
app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)


module.exports = app