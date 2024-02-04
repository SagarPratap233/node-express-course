const authorize = (req, res, next) => {
    const { user } = req.query;

    console.log("Authorize middleware called");

    // Check if the request path is for the favicon
    if (req.path === '/favicon.ico') {
        console.log("Skipping authorization for favicon.ico");
        next();
        return;
    }

    if (user === "john") {
        console.log("User is authorized:", user);
        res.user = { name: "John", age: "12" };
        next();
    } else {
        console.log("User is unauthorized:", user);
        res.status(401).send("You are unauthorized");
        next();
    }
}

module.exports = authorize;



