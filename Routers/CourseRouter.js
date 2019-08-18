const course = require("../Controllers/CourseController");
const router = require("express").Router();
const multer = require ("multer");
const upload = multer({dest: __dirname + '/uploads/'});
router.post("/create", upload.single('file') , course.create);
router.get("/find/:id", course.find);
router.put("/update/:id", course.update);
router.get("/findall", course.findall);
router.delete("/delete/:id", course.delete);
module.exports = router;
//routers
