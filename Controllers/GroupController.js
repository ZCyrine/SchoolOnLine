const Group = require("../models/GroupModel");
module.exports = {
  create: function(req,res)
  {

    const Group = new Group({
      nom : req.body.nom
    })

    Group.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': ''})
      }


    })
  },
  delete: function (req,res) {
    Group.findOneAndRemove({'_id' : req.params.id}, function (err,Group){
      if(err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': 'suppression avec succées'})
      }
    })
  },
  find : function (req, res) {
    Group.findById({_id: req.params.id}).populate('EtudiantModel', 'nom').exec( function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'Group found', data})
      }

    })

  },
  findall : function (req, res) {
    Group.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'Group found', data})
      }

    })

  },
  update  :function (req, res) {
    Group.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Group) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
  push : function (req , res) {
    Group.updateOne({_id : req.params.id}, {$push : { EtudiantModel : req.body.EtudiantModel}},
      function (err ,data) {
        if(err) {
          res.json({'state': 'no', 'msg': 'vous avez un erreur'})
        }

        else {
          res.json({'state': 'ok', 'msg':'Group updated'})
        }
      }
    )

  }







}
