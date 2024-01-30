

const express = require('express')
const app = express()
const {products} = require('./data')
 
// app.get('/', (req, res)=> {
//     // res.json([{name:"Sagar"}, {name : 'Pratap'}])
//     res.json(products)
    

// })

app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');  // Disable caching
    res.status(200).send('<h1>HomePage</h1><br><a href = "/API">API Products</a></br>');
});

app.get('/API', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');  // Disable caching
    const newProducts = products.map((product)=> {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.status(200).json(newProducts);
});

