const { Response, ServerConstants, jwt } = require('../dependencies/Dependencies')
const { SECRET_JWT_KEY } = require('../dependencies/Config')
const utils = require('../utils/Utils')

module.exports = (req, res, next) => {
  const response = new Response()
  const authorizationCookie = req.cookies['access-token']

  if (utils.IsNullOrUndefined(authorizationCookie) || utils.StringIsNullOrEmpty(authorizationCookie)) {
    response.StatusCode = ServerConstants.CODE_NOT_AUTHORIZED
    response.MessageOperation = ServerConstants.NOT_AUTHORIZED
    return res.status(response.StatusCode).json(response)
  }

  try {
    const payload = jwt.verify(authorizationCookie, SECRET_JWT_KEY)
    if ('userId' in req.body) {
      delete req.body.userId
    }

    req.body.userId = payload.user_id
    next()
  } catch (error) {
    response.StatusCode = ServerConstants.CODE_TOKEN_INVALID
    response.MessageOperation = ServerConstants.TOKEN_INVALID
  }
}
