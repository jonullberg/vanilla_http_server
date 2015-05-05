'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	if(req === '/time') {
		console.log(req);
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		if(req.method === 'GET') {
			req.on('data', function(data) {
				var body = JSON.parse(data)
			})
			res.write(JSON.stringify({'current time': Date.now()}));
			return res.end();
		}
	}
});

server.listen(3000, function() {
	console.log('Your server is running');
});