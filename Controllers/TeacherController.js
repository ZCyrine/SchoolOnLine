// exporter model
const Teacher = require("../models/TeacherModel");

module.exports = {
  create: function(req,res) {

    const teacher = new Teacher({
      nom: req.body.nom,
      prenom : req.body.prenom,
      email : req.body.email,
      date_naissance : req.body.date_naissance,
      tel : req.body.tel,
      password : req.body.password,
      role: req.body.role,
      salaire: req.body.salaire,
      nbre_heure: req.body.nbre_heure,
      nbre_groupe:req.body.nbre_groupe

    })

    teacher.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })
  },
  delete: function (req,res) {
    Teacher.findOneAndRemove({'_id' : req.params.id}, function (err,Teacher){
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  findById : function (req, res) {
    Teacher.findOne({_id: req.params.id}).populate({path: 'groupe', populate:{path: 'EtudiantModel'}}).exec( function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'Teacher found', data})
      }

    })

  },
  findall : function (req, res) {
    Teacher.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json(data)
      }

    })

  },
  update  : function (req, res) {
    GroupeModel.findByIdAndUpdate({_id : req.params.id}, {nom: req.body.nom },{prenom: req.body.prenom },{email: req.body.email },{date_naissance: req.body.date_naissance },{tel: req.body.tel },{salaire: req.body.salaire },{nbre_heure: req.body.nom } ,function (err, groupe) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
  push : function (req , res) {
    Teacher.updateOne({_id: req.params.id}, {$push: {groupe: req.body.groupe}},
      function (err, data) {
        if (err) {
          res.json({'state': 'no', 'msg': 'vous avez un erreur'})
        } else {
          res.json({'state': 'ok', 'msg': 'teacher updated' +data})
        }
      }
    )
  }






}
