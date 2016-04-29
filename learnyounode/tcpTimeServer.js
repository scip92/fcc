var port = process.argv[2];
var net = require('net');
var strf = require('strftime');

var server= net.createServer(function(socket){
    
    var dateStr = strf("%F %H:%M", new Date());
    str = "";
    for(var i = 0; i< 100000; i++){
        str += dateStr+ " " + i;
        if( i % 1000 == 0 )
            {
                socket.write(str);
                socket.write("\n");
                str = "";
            }
    }    
    
    socket.end();
    
});
server.listen(port);

console.log("Server running on port: ", port);