"use strict";

//import HTTP lib
const http = require('http');

const PORT = 3000;

function handleRequest(req, res)
{


}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
})