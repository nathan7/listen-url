module.exports =
function listenUrl() {
  var addr = this.address()
    , host = (addr.family == 'IPv6') ? ('[' + addr.address + ']') : addr.address
    , port = addr.port
    , url = 'http://' + host + (port == 80 ? '' : (':' + port))
  if (this._events && this._events.url && typeof this.emit == 'function')
    return this.emit('url', url, { host: host, port: port }, addr)
  console.log('listening on ' + url)
}
