var database = require('../db');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.handleRequest = function(request, response) {
  var action = actions[request.method];
console.log(request.method, ' method invoked')
  if(action){
    action(request, response);
  } else {
    response.writeHead(404, 'Not Found');
    response.end();
  }
  // response.end('Hold on I\'m setting this shit up');
};

var actions = {
  'GET': (request, response) => {
    var queryString = 'SELECT * FROM animals';
    database.query(queryString, function(err, rows, fields) {
      response.writeHead(200, headers);
      response.end(JSON.stringify(rows));
    });
  },
  'POST': (request, response) => {
    var params = [ request.body.name, request.body.image, request.body.description ];

    var queryString = 'INSERT INTO animals(name, image, description) VALUES(?, ?, ?)';

    database.query(queryString, params, function(err, results){
      response.writeHead(201, headers);
    });
  },
  'OPTIONS': (request, response) => {
    response.end(200, headers);
  }
};