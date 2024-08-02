const HTTP = require('http');
const hostName = '127.0.0.1';
const port = 3000;

const server = HTTP.createServer((req,res)=>{

    res.statusCode = 200;

    res.setHeader('Content-type','text/plain');
    res.end('Hello Filipe');

})

server.listen(port,hostName,()=>{
    console.log("Hello Word")
})