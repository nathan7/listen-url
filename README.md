listen-url
==========
```javascript
var http = require('http');
http.createServer(function(req, res) {
  res.write('Hello, world!');
  res.end();
}).listen(0, require('listen-url'));
```

output:
```
listening on http://0.0.0.0:56841
```

.on('url', cb)
==============
disables the default behaviour (writing the URL to the console). the event listener gets the URL as argument.
if you want to do more magic, you get {host, port} as second argument (host preformatted for an URL, so has brackets for IPv6) and the full untouched address object as the third argument.

```javascript
var http = require('http');
http.createServer(function(req, res) {
  res.write('Hello, world!');
  res.end();
}).on('url', function(url) {
  console.log('Arr, mateys! We be sailin\' at ' + url + '!');
}).listen(0, require('./'));
```

output:
```javascript
Arr, mateys! We be sailin' at http://0.0.0.0:33643!
```
