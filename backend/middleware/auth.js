const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const isCustomToken = token.length < 500

    let decodedData

    if (token && isCustomToken) {
      decodedData = jwt.verify(token, config.SECRET)

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)
      req.userId = decodedData?.sub
    }
    next()
  } catch (error) {
    next(error)
  }
}