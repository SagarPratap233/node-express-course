const http = require('http');
const {readFileSync} = require('fs')

// reading the html file 
const homepage = readFileSync('./index.html')

const server = http.createServer((req, res)=> {
//  console.log('user hit the server')
 const url = req.url;
 if(url ==='/')
 {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write(homepage)
    res.end()
 }
 else if( url === '/about')
 {
    res.writeHead(200, {'content-type' : 'text/plain'})
    res.write('What do you want to know?')
    res.end()
 }
 else {

    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    res.end()
 }
 

})

server.listen(5000)