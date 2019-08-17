// export model
const Claim = require("../models/ClaimModel");
//import nodemailer
var nodemailer = require('nodemailer');

module.exports = {
  //function create
  create: function(req,res) {

    const claim = new Claim({
      subject : req.body.subject,
      text : req.body.text,
      object: req.body.object,
      email:req.body.email

    })

    Claim.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'+err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })
  },
  //function delete
  delete: function (req,res) {
    Claim.findOneAndRemove({'_id' : req.params.id}, function (err,claimModel){
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //function delete
  find : function (req, res) {
    claim.findById({_id: req.params.id}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'Claim found', data})
      }

    })

  },
  //function findall
  findall : function (req, res) {
    Claim.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur'})
      }

      else {
        res.json({'state': 'ok', 'msg':'claims found', data})
      }

    })

  },
  //function update
  update  :function (req, res) {
    Claim.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, claim) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
}
