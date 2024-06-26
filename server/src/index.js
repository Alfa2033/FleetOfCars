const { express, app, SERVER_PORT, URL_WEB_APP, ServerConstants } = require('./dependencies/Dependencies')
const server = require('./controllers/ServerController')
const routes = require('./api/Routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(cookieParser())
app.use(cors({
  origin: [URL_WEB_APP],
  credentials: true,
  methods: [ServerConstants.METHOD_POST, ServerConstants.METHOD_GET]
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)
server.StartServer(SERVER_PORT)
