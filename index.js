var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated. 
var server = express(); // better instead

  server.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 80);