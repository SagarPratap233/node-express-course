
const express = require('express')
const app = express()
const logger = require('./logger')

// lets move this logger middle ware to some otehr file
// const logger = (req, res, next) => {

//     let method = req.method;
//     let url = req.url;
//     let time = new Date().getFullYear();
//     console.log(method);
//     console.log(time);
//     console.log(url);
    
//     //middleware after completeling its functions needs to move to next middleware or needs to send a response 
  
//     // res.send("HI");
//     next();
// }
// we want to get these avaialble in all the routes we need to have a function 
// these function are middleware

// app.get('/', (req, res)=> {
//     let method = req.method;
//     let url = req.url;
//     let time = new Date().getFullYear();
//     console.log(method);
//     console.log(time);
//     console.log(url);

//     res.send("Home Page");
// })

// to avoid using logger in every route we can just simply add app.use
app.use(logger);


app.get('/' , (req , res)=> {

    res.send("Home Page");
})

app.get('/about' , (req , res)=> {

    res.send("About");
})

app.get('/profile' , (req , res)=> {

    res.send("profile");
})


app.listen(5000, ()=> {

    console.log('server is listening on port 5000');
})

