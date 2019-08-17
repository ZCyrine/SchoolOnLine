const role = require("../Controllers/RoleController");
const router = require("express").Router();
router.post('/create' , role.create);
router.get('/find/:id' , role.find);
router.get('/findall' , role.findall);
router.delete('/delete/:id', role.delete);
router.put('/update/:id' , role.update);
module.exports = router;
