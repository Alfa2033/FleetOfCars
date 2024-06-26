const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.resolve(__dirname, '../' + process.env.ENVIRONMENT + '.env')
})

module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  USER_SQL: process.env.USER_SQL,
  PASSWORD: process.env.PASSWORD,
  SERVER_SQL: process.env.SERVER_SQL,
  DATABASE: process.env.DATABASE,
  SERVER_PORT: process.env.SERVER_PORT,
  URL_WEB_APP: process.env.URL_WEB_APP,
  DIALECT_SEQUELIZE: process.env.DIALECT_SEQUELIZE,
  PORT_SQL: process.env.PORT_SQL,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY
}
