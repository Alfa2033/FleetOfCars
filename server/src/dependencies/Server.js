class Server {
  constructor (port) {
    this.port = Number(port)
  }

  get _port () {
    return this.port
  }
}

module.exports = Server
