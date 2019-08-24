// exporter model
const Student= require("../models/StudentModel");

module.exports = {
  //create function
  create: function(req,res) {

    const student= new Student({
      nic : req.body.nic,
      name : req.body.name,
      lastname : req.body.lastname,
      email : req.body.email,
      password: req.body.password,
      datebirth: req.body.datebirth,
      phonenumber : req.body.phonenumber,
      gender : req.body.gender,
      role: req.body.role,
      levelstudy: req.body.levelstudy,
      registnumber: req.body.registnumber

    })
    student.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'+err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })},
  //delete function
  delete: function (req,res) {
    Student.findOneAndRemove({'_id' : req.params.id}, function (err,Student){
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //find function
  find : function (req, res) {
    Student.findById({_id: req.params.id}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'Student found', data})
      }

    })

  },
  //findall function
  findall : function (req, res) {
    Student.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json(data)
      }

    })

  },
}
