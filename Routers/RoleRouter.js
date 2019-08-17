const Role = require("../Controllers/RoleController");
const router = require("express").Router();
router.post('/create' , Role.create);
router.get('/find/:id' , Role.find);
router.get('/findall' , Role.findall);
router.delete('/delete/:id', Role.delete);
router.put('/update/:id' , Role.update);
module.exports = router;
