const admin = require("../Controllers/AdminController");
const router = require("express").Router();
router.post("/create", admin.create);
router.delete("/delete/:id", admin.delete);
router.get("/find/:id", admin.find);
router.get("/findall",admin.findall);
router.put("/update/:id",admin.update);
router.post("/login",admin.login);
module.exports = router;
