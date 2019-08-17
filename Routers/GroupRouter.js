const Group = require("../Controllers/GroupController");
const router = require("express").Router();
router.post("/create", Group.create);
router.delete("/delete/:id", Group.delete);
router.get("/find/:id", Group.find);
router.get("/finall",Group.findall);
router.put("/push/:id",Group.push);
module.exports = router;
