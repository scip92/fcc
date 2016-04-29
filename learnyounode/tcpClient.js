var net = require("net");
var client = new net.Socket();
var port = process.argv[2];

client.connect(port, '127.0.0.1', function(){
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});
client.on('data', function(data) {
	console.log('Received: ' + data);
	 // kill client after server's response
});

client.on('close', function() {
    client.destroy();
	console.log('Connection closed');
});