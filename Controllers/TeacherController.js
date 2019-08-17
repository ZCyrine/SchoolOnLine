// exporter model
const Teacher = require("../models/TeacherModel");

module.exports = {
  //create function
  create: function(req,res) {

    const teacher = new Teacher({
      nic : req.body.nic,
      name : req.body.name,
      lastname : req.body.lastname,
      email : req.body.email,
      password: req.body.password,
      datebirth: req.body.datebirth,
      phonenumber : req.body.phonenumber,
      gender : req.body.gender,
      role: req.body.role,
      salary: req.body.salary,
      nbrehour: req.body.nbrehour,
      group:req.body.group

    })

    teacher.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })
  },
  //delete function
  delete: function (req,res) {
    Teacher.findOneAndRemove({'_id' : req.params.id}, function (err,Teacher){
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //findbyid function
  findById : function (req, res) {
    Teacher.findOne({_id: req.params.id}).populate({path: 'groupe', populate:{path: 'StudentModel'}}).exec( function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg':'Teacher found', data})
      }

    })

  },
  //find all function
  findall : function (req, res) {
    Teacher.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json(data)
      }

    })

  },
  //update function
  update  : function (req, res) {
    GroupModel.findByIdAndUpdate({_id : req.params.id}, {nom: req.body.nom },{prenom: req.body.prenom },{email: req.body.email },{date_naissance: req.body.date_naissance },{tel: req.body.tel },{salaire: req.body.salaire },{nbre_heure: req.body.nom } ,function (err, groupe) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
  //push function
  push : function (req , res) {
    Teacher.updateOne({_id: req.params.id}, {$push: {group: req.body.group}},
      function (err, data) {
        if (err) {
          res.json({'state': 'no', 'msg': 'vous avez un erreur' + err})
        } else {
          res.json({'state': 'ok', 'msg': 'teacher updated' +data})
        }
      }
    )
  }






}
