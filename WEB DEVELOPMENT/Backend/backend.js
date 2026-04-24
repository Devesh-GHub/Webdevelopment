const fs = require("fs");
const http = require('http');
const text = fs.readFileSync("Grid.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.end(text);
} )

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to the port 8000!!");
})
