const express = require("express")
const router = express.Router();

router.post("/", (req, res)=> {
    console.log(req.body)
    const {name} = req.body
    if(name)
    {
        return res.status(200).json({sucess:true, person: name })
    }

    res.status(401).json({sucess:false, msg: "Could not post the data"});
})


module.exports = router;