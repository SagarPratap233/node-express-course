

const express = require('express')
const app = express()
const {products} = require('./data')
 

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

app.get('/API/:customerID', (req, res) => {

    // console.log(req)
    console.log(req.params);
    const {customerID} = req.params;

    //customerID is always string 
    const newProducts1 = products.find((product)=> product.id === Number(customerID));
    console.log(newProducts1)
    if(!newProducts1)
    {
        return res.status(404).send("Could not find the product")
    }
    return res.status(200).json(newProducts1);
});

app.get('/API/:customerID/review/:cust', (req, res) => {

    // console.log(req)
   
        return res.status(200).send("Hey Boys")
    
});

app.get('/api/v1/query', (req, res)=> {

    let sortproducts = [...products];
    let {search , limit}  = req.query;

    if(search) 
    {
        sortproducts = sortproducts.filter(product=> product.name.toLowerCase().startsWith(search.toLowerCase()))

      
    }
    if(limit)
    {
        sortproducts = sortproducts.slice(0, Number(limit));
    }

    if(sortproducts.length<1)
    {
        return res.send("No Matching Result Found")
    }

     res.json(sortproducts);
})


app.listen(5000, ()=> {

    console.log('server is listening on port 5000');
})

