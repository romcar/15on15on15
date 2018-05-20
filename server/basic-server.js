var http = require('http');
var handleRequest = require('./request-handler').handleRequest;
var port = 3000;
var ip = '127.0.0.1';

var server = http.createServer(handleRequest);
server.listen(port, ip);

console.log('Listening on port: ' + port + ' ip: ' + ip);
