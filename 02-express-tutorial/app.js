

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

// when you want to specify simgle products separately 

// app.get('/API/1', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('Cache-Control', 'no-store');  // Disable caching
//     const newProducts1 = products.find((product)=> product.id === 1
//     )
//     res.status(200).json(newProducts1);
// });


// lets say there so many prodcuts then you can writ each setup
// we use route parameters 


app.get('/API/:customerID', (req, res) => {

    // console.log(req)
    console.log(req.params);
    const {customerID} = req.params;

    //customerID is always string 
    const newProducts1 = products.find((product)=> product.id === Number(customerID));
    if(!newProducts1)
    {
        return res.status.send("Could not find the product")
    }
    return res.status(200).json(newProducts1);
});




app.listen(5000, ()=> {

    console.log('server is listening on port 5000');
})

