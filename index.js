module.exports =
function listenUrl() {
  var addr = this.address()
    , host = (addr.family == 'IPv6') ? ('[' + addr.address + ']') : addr.address
    , port = addr.port
    , url = 'http://' + host + (port == 80 ? '' : (':' + port))
  if (typeof this.listeners === 'function' && (this.listeners('url') || []).length)
    return this.emit('url', url, { host: host, port: port }, addr)
  console.log('listening on ' + url)
}
