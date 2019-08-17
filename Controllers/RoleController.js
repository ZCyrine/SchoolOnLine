// exporter model
const Role = require("../models/RoleModel");

module.exports = {
  //function create
  create: function (req, res) {

    const role = new Role({
       name  : req.body.name,

    })

    role.save(function (err) {
      if (err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })
  },
  //function delete
  delete: function (req, res) {
    Role.findOneAndRemove({'_id': req.params.id}, function (err, Role) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //function find
  find: function (req, res) {
    Role.findById({_id: req.params.id}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'Role found', data})
      }

    })

  },
  //function findall
  findall: function (req, res) {
    Role.find({}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'Role found', data})
      }

    })

  },
  //function update
  update  :function (req, res) {
    Role.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cour) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
}
