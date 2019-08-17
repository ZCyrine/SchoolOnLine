const Group = require("../Controllers/GroupController");
const router = require("express").Router();
router.post("/create", Group.create);
router.delete("/delete/:id", Group.delete);
router.get("/findById/:id", Group.findById);
router.get("/findAll",Group.findAll);
router.put("/Push/:id",Group.Push);
module.exports = router;
