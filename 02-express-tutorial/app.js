const express = require('express');
const app = express();
const people = require('./routes/people');
const login = require('./routes/auth');


//static assests 
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }))
// We have to use this middle ware to excess the req.body
app.use(express.json())
app.use('/api/people', people)
app.use('/login', login)




app.listen(5000, ()=> {
    console.log("server is listening at 5000")
})


