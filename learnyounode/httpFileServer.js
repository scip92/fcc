var port = process.argv[2];
var fileName = process.argv[3];
var http = require('http');
var fs = require('fs');

var server = http.createServer(callback);
server.listen(port);


function callback(request, response){
    var readStream = fs.createReadStream(fileName);
    readStream.pipe(response);
}

