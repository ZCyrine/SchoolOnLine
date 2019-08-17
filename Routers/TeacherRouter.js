const teacher = require("../Controllers/TeacherController");
const router = require("express").Router();
router.post("/create", teacher.create);
router.get("/findById/:id", teacher.findById);
router.get("/findall", teacher.findall);
router.delete("/delete/:id", teacher.delete);
router.put("/update/:id", teacher.update);
router.put("/push/:id", teacher.push);

module.exports = router;
