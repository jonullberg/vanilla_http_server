'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url).pathname;
	var name = path.slice(7);
	if(path === '/time') {
		var currentTime = new Date();
		currentTime.toString();
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.write(JSON.stringify({msg: 'your current time is ' + currentTime}));
		return res.end();
	} else if (path.slice(0,6) === '/greet') {
		console.log(req.method);
		if (req.method = 'POST') {
			req.on('data', function(data) {
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				var body = JSON.parse(data);
				res.write(JSON.stringify({msg: 'hello' + body.name}));
				return res.end();
			});
		} 
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify({msg: 'hello ' + name}));
			return res.end();
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.write(JSON.stringify({msg: 'Could not find page'}));
		res.end();
	}
});

server.listen(3000, function() {
	console.log('Your server is running');
});