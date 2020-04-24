var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated. 
var server = express(); // better instead

  server.use(express.static(__dirname + '/public'));

console.log(process.env)

server.listen(process.env.PORT || 8080);