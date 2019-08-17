const student = require("../Controllers/StudentController");
const router = require("express").Router();
router.post("/create", student.create);
router.delete("/delete/:id", student.delete);
router.get("/find/:id", student.find);
router.get("/findall",student.findall);

module.exports = router;
