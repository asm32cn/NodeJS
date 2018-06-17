// node-js-post-demo-1.js
var http = require('http')
var querystring = require('querystring')

var postHTML = '<html>' +
	'<head><meta char="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
	'<body>' +
	'<form method="post">' +
	'网站名: <input name="name" value="菜鸟教程"><br>' +
	'网站URL: <input name="url" value="www.runoob.com"><br>' +
	'<input type="submit">' +
	'</form>' +
	'</body></html>';

http.createServer(function(req, resp){
	var body = '';
	req.on('data', function(chunk){
		body += chunk;
	});

	req.on('end', function(){
		// 解析参数
		body = querystring.parse(body);
		// 设置响应头部信息及编码
		resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

		if(body.name && body.url){ //输出提交数据
			resp.write('网站名: ' + body.name);
			resp.write('<br>\n');
			resp.write('网站URL: ' + body.url);
		}else{ // 输出表单
			resp.write(postHTML);
		}
		resp.end();
	});
}).listen(3000);

console.log('listen: 3000');
