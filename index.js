module.exports =
function listenUrl() {
  var addr = this.address()
    , host = (addr.family == 'IPv6') ? ('[' + addr.address + ']') : addr.address
    , port = addr.port
    , url = 'http://' + host + (port == 80 ? '' : (':' + port))
  if (this.emit)
    if (this.emit('url', url, { host: host, port: port }, addr)) return
  console.log('listening on ' + url)
}
