const logger = (req, res, next) => {

    let method = req.method;
    let url = req.url;
    let time = new Date().getFullYear();
    console.log(method);
    console.log(time);
    console.log(url);
    
    //middleware after completeling its functions needs to move to next middleware or needs to send a response 
  
    // res.send("HI");
    next();

}

module.exports = logger;