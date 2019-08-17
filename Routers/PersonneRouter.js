const Personne = require("../Controllers/PersonneController");
const router = require("express").Router();
router.post("/create", Personne.create);
router.delete("/delete/:id", Personne.delete);
router.get("/find/:id", Personne.find);
router.get("/findall",Personne.findall);
router.put("/update/:id",Personne.update);
router.post("/login",Personne.login);
module.exports = router;
