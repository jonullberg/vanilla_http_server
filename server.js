'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url).pathname;
	var name = path.slice(7);
	if(path === '/time') {
		var currentTime = new Date();
		currentTime.toLocaleTimeString();
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.write(JSON.stringify({msg: 'your current time is ' + currentTime}));
		return res.end();
	} else if (path.slice(0,6) === '/greet') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		if (req.method === 'POST') {
			req.on('data', function(data) {
				var body = JSON.parse(data);
				var greeting = 'hello ' + body.name;
				res.write(JSON.stringify({msg: greeting}));
				return res.end();
			});
		} else {
			res.write(JSON.stringify({msg: 'hello ' + name}));
			res.end();
		}
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