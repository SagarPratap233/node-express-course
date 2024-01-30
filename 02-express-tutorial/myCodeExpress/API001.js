const express = require('express')
const app = express()
const {products} = require('./data')
 
// app.get('/', (req, res)=> {
//     // res.json([{name:"Sagar"}, {name : 'Pratap'}])
//     res.json(products)
    

// })

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');  // Disable caching
    res.status(200).json(products);
});


app.listen(5000, ()=> {

    console.log('server is listening on port 5000');
})
