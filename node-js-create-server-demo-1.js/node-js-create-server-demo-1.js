// node-js-create-server-demo-1.js
var http = require('http');

var n = 0;

http.createServer(function(request, response){
	// 发送 http 头数据
	// http 状态值: 200 : OK
	// 内容类型: text.plain
	response.writeHeader(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello world!"
	response.end('Hello world!' + n++);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');