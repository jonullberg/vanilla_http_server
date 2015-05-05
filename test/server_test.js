'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expects = chai.expect;

chai.use(chaiHttp);

require('../server.js');

describe('The server', function() {
	it('should respond to a POST request', function(done) {
		chai.request('localhost:3000')
			.post('/greet')
			.send({name: 'Jonathan'})
			.end(function(err, res) {
				expects(err).to.equal(null);
				expects(res.body.msg).to.equal('hello Jonathan');
				done();
			});
	});
	it('should respond to a GET request', function(done) {
		chai.request('localhost:3000')
			.get('/greet/jonathan')
			.end(function(err, res) {
				expects(err).to.equal(null);
				expects(res.body.msg).to.equal('hello jonathan');
				done();
			});
	});
	it('should show the time for /time', function(done) {
		chai.request('localhost:3000')
			.get('/time')
			.end(function(err, res) {
				var serverTime = new Date();
				serverTime.toLocaleTimeString();
				expects(err).to.equal(null);
				expects(res.body.msg).to.equal('your current time is ' + serverTime);
				done();
			});
	});
});