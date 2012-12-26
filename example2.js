var http = require('http');
http.createServer(function(req, res) {
  res.write('Hello, world!');
  res.end();
}).on('url', function(url) {
  console.log('Arr, mateys! We be sailin\' at ' + url + '!');
}).listen(0, require('./'));
