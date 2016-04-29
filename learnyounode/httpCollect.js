var http = require("http");
var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];

http.get(urlOne, callback);
http.get(urlTwo, callback);
http.get(urlThree, callback);

function callback(response){
    response.setEncoding("utf8");
    var dataObject = "";
    
    response.on("end", function(end){
        console.log(dataObject);
    })
    response.on("data", function(data){
        dataObject += data.toString();
    })
    response.on("error", function(err){
        console.log(err);
    })
    
}
