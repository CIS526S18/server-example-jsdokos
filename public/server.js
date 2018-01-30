"use strict";

//import HTTP lib
const http = require('http');

const PORT = 3020;

const fs = require('fs');

function handleRequest(req, res)
{

    switch (req.url)
    {
        case '/':
        case '/openhouse.html':
            res.end(fs.readFileSync('public/openhouse.html'));
            break;
        case '/openhouse.css':
            res.end(fs.readFileSync('public/openhouse.css'));
            break;
        case '/openhouse.js':
            res.end(fs.readFileSync('public/openhouse.js'));
            break;

    }
    if (fs.existsSync(req.url))
    {
        var body = fs.readFileSync("piblic/" + req.url);
    }
    //console.log();
    var body = fs.readFileSync('/public/openhouse.html');

    res.end(body);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});