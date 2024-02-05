
const {people} = require("../data");
const getPerson = (req, res)=> {

    res.status(200).json({sucess: true, data: people})
}

const updatePerson = (req, res)=> {
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

}

const deletePerson = (req, res)=> {
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

}
const createPerson = (req, res)=>{
    const {name} = req.body;
    if(name)
    {
        return res.status(201).json({sucess:true, person: name })
    }

    res.status(401).json({sucess:false, msg: "Could not post the data"});
    
}

const createPersonPostman =  (req, res)=> {
    const {name} = req.body;
    if(name) {
        return res.status(201).json({sucess: true, data: [...people], name})
    }
    res.status(401).json({sucess:false, msg : "could not post the name"})
}


module.exports = {
    getPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
    createPerson


}
