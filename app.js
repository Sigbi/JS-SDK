var http = require('http');
var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(5000);
});