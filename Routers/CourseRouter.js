const course = require("../Controllers/CourseController");
const router = require("express").Router();
router.post("/create", course.create);
router.get("/find/:id", course.find);
router.put("/update/:id", course.update);
router.get("/findall", course.findall);
router.delete("/delete/:id", course.delete);
module.exports = router;
