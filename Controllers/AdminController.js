// import models
const Admin = require("../models/AdminModel");
//import bcrypt for incryption password
const bcrypt = require('bcrypt');
//import jsonwebtoken
const jwt = require("jsonwebtoken");
module.exports = {
  //function create
  create: function(req,res) {

    const Admin = new Admin({
      nic : req.body.nic,
      name : req.body.name,
      lastname : req.body.lastname,
      email : req.body.email,
      datebirth: req.body.datebirth,
      phonenumber : req.body.phonenumber,
      gender : req.body.gender,
      role: req.body.role

    })
    //save function
    Admin.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': '\n' + 'successfully added'})
      }


    })
  },
  //function delete
  delete: function (req,res) {
    Admin.findOneAndRemove({'_id' : req.params.id}, function (err,Admin){
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': '\n' + 'successful removal'})
      }
    })
  },
  //function find
  find : function (req, res) {
    Admin.findById({_id: req.params.id}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'user found', data})
      }

    })

  },
  //function findall
  findall : function (req, res) {
    Admin.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'user found', data})
      }

    })

  },
  //function update
  update :function (req, res) {
    Admin.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Admin) {
      if (err) return next(err);
      res.send('Admin udpated.');
    });
  },
  //function login
  login: function (req, res) {
    Admin.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      var token = jwt.sign({ id: user._id } , 'secret ' , {
        expiresIn: 86400 // expires in 24 hours
      } );
      res.status(200).send({ auth: true ,data :{user: user, token: token}});
    });
  },
}








