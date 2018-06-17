// node-js-get-demo-2.js
var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function(req, resp){
	resp.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

	// 解析 url 参数
	var params = url.parse(req.url, true).query;

	resp.write('网站名: ' + params.name);
	resp.write('\n');
	resp.write('网站URL: ' + params.url);
	resp.write('\n');
	resp.end();
}).listen(3000);

console.log('listen: 3000');