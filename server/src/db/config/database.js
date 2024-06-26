const config = require('../../dependencies/Config')

module.exports = {
  development: {
    username: config.USER_SQL,
    password: config.PASSWORD,
    database: config.DATABASE,
    host: config.SERVER_SQL,
    port: config.PORT_SQL,
    dialect: config.DIALECT_SEQUELIZE,
    dialectOptions: {
      bigNumberStrings: true
    }
  }
}
