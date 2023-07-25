let http = require('http');
let fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('test.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}).listen(1080);

// express js
// const express = require("express")
// const app = express()
// app.listen(8080)

