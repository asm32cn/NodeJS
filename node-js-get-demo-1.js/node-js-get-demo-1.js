// node-js-get-demo-1.js
var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function(req, resp){
	resp.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
	resp.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

console.log('listen: 3000');