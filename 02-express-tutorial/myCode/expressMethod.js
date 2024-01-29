const express = require('express');
const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.use
// app.listen
app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=> {
    console.log('user hit the about page')
    res.status(200).send('About Page')
})



app.all('*', (req, res)=>{

    res.status(404).send('<h1>Resource not Found</h1>')
})
app.listen(5000, ()=> {
    console.log('server is listening at 5000')
})