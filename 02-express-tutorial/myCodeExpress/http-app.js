const express = require('express');
const app = express()
const path = require('path')

// to get all the files which are required for Css, images and logic code 
// setup static and middleware
app.use(express.static('./public'))


// getting the index file 
app.get('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all('*', (req, res)=>{

    res.status(404).send('<h1>Resource not Found</h1>')
})

app.listen(5000, ()=> {
    console.log('server is listening at 5000')
})