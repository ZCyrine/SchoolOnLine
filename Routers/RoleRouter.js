const Role = require("../Controllers/RoleController");
const router = require("express").Router();
router.post('/create' , Role.create);
router.put('/update/:id' , Role.update);
module.exports = router;
