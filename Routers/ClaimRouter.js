const claim = require("../Controllers/ClaimController");
const router = require("express").Router();
router.post("/create", claim.create);
router.get("/findall", claim.findall);
router.get("/find/:id", claim.find);
router.put("/update/:id", claim.update);
router.delete("/delete/:id", claim.delete);

module.exports = router;
