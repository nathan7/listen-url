module.exports = function() {
  var addr = this.address();
  var host = (addr.family == 'IPv6') ? ('[' + addr.address + ']') : addr.address;
  var port = addr.port;

  var url = 'http://' + host + (port == 80 ? '' : (':' + port));
  if (this._events && this._events.url && typeof this.emit == 'function') return this.emit('url', url);
  console.log('listening on ' + url);
};
