const config = require('./Config')
const express = require('express')
const utils = require('../utils/Utils')
const Response = require('./Response')
const ValidModel = require('./ValidModel')
const jwt = require('jsonwebtoken')
const ServerConstants = require('../constants/ServerConstants')
const app = express()

module.exports = {
  app,
  jwt,
  utils,
  express,
  Response,
  ValidModel,
  ServerConstants,
  URL_WEB_APP: config.URL_WEB_APP,
  SERVER_PORT: config.SERVER_PORT
}
