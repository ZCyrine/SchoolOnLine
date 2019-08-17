// exporter model
const Role = require("../models/Role");

module.exports = {
  create: function (req, res) {

    const role = new Role({
      nom: req.body.nom,

    })

    role.save(function (err) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'ajout avec succées'})
      }


    })
  },
  delete: function (req, res) {
    Role.findOneAndRemove({'_id': req.params.id}, function (err, Role) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'suppression avec succées'})
      }
    })
  },
  find: function (req, res) {
    Role.findById({_id: req.params.id}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'Role found', data})
      }

    })

  },
  findall: function (req, res) {
    Role.find({}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      } else {
        res.json({'state': 'ok', 'msg': 'Role found', data})
      }

    })

  },
  update  :function (req, res) {
    Role.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cour) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
}
