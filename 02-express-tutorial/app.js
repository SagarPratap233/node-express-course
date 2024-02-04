const express = require('express');
const app = express();
const {people} = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }))
app.get("/api/people", (req, res)=> {

    res.status(200).json({sucess: true, data: people})
})

app.post("/login", (req, res)=> {
    console.log(req.body)
    const {name} = req.body
    if(name)
    {
        return res.status(200).json({sucess:true, person: name })
    }

    res.status(401).json({sucess:false, msg: "Could not post the data"});
})

// We have to use this middle ware to excess the req.body
app.use(express.json())
app.post("/api/people", (req, res)=>{
    const {name} = req.body;
    if(name)
    {
        return res.status(201).json({sucess:true, person: name })
    }

    res.status(401).json({sucess:false, msg: "Could not post the data"});
    
})

app.post("/api/postman/people", (req, res)=> {
    const {name} = req.body;
    if(name) {
        return res.status(201).json({sucess: true, data: [...people], name})
    }
    res.status(401).json({sucess:false, msg : "could not post the name"})
})

app.put("/api/postman/people/:id", (req, res)=> {
    console.log(req.params.id)
    const {name} = req.body
    const {id} = req.params
    const person1  = people.find(person=> person.id ===Number(id))
   
    console.log(id, person1, name)
    if(person1){
        const newPerson = people.map((person) => {
            if(person.id === Number (id)){
                person.name = name
            }
            return person;
        
        })
        return res.status(200).json({sucess: true, data : newPerson})
    }

    return res.status(404).json({sucess:false, msg: "Could not find the person"})

})

app.delete("/api/postman/people/:id", (req, res)=> {
    console.log(req.params.id)
    const {name} = req.body
    const {id} = req.params
    const person1  = people.find(person=> person.id ===Number(id))
   
    console.log(id, person1, name)
    if(person1){
        const newPerson = people.filter((person) => person.id !== Number (id))
        
        return res.status(200).json({sucess: true, data : newPerson})
    }

    return res.status(404).json({sucess:false, msg: "Could not find the person"})

})

app.listen(5000, ()=> {
    console.log("server is listening at 5000")
})


