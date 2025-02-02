const http = require('http');
const {readFileSync} = require('fs')

// reading the html file 
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImages = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')



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
 else if( url === '/styles.css')
 {
    res.writeHead(200, {'content-type' : 'text/css'})
    res.write(homeStyles)
    res.end()
 }
 else if( url === '/logo.svg')
 {
    res.writeHead(200, {'content-type' : 'image/svg+xml'})
    res.write(homeImages)
    res.end()
 }
 else if( url === '/browser-app.js')
 {
    res.writeHead(200, {'content-type' : 'text/javaScript'})
    res.write(homeLogic)
    res.end()
 }
 else {

    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    res.end()
 }
 

})

server.listen(5000)