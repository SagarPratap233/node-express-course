const express = require("express")
const router = express.Router()
const {people} = require("../data");

const {
    getPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
    createPerson


} = require("../controller/people")


// router.get("/", getPerson )

// router.post("/", createPerson)

// router.post("/postman", createPersonPostman)

// router.put("/postman/:id", updatePerson)

// router.delete("/postman/:id", deletePerson)

router.route('/').get(getPerson).post(createPerson);
router.route('/postman').post(createPersonPostman)
router.route('/postman/:id').put(updatePerson).delete(deletePerson);

module.exports = router;