const Group = require("../models/groupModel");
module.exports = {
  //function create
  create: function(req,res) {

    const group = new Group({
      name: req.body.name
    })

    group.save(function (err) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successfully added'})
      }


    })
  },
  //function delete
  delete: function (req,res) {
    Group.findOneAndRemove({'_id' : req.params.id}, function (err,group){
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //function find
  find : function (req, res) {
    Group.findById({_id: req.params.id}).populate('StudentModel', 'nom').exec( function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg':'group found', data})
      }

    })

  },
  //function findall
  findall : function (req, res) {
    Group.find({}, function (err, data) {
      if(err) {
        res.json({'state': 'no', 'msg': ' erreur' + err})
      }

      else {
        res.json({'state': 'ok', 'msg':'group found', data})
      }

    })

  },
  //function update
  update  :function (req, res) {
    Group.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, group) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
  //function push
  push : function (req , res) {
    Group.updateOne({_id : req.params.id}, {$push : { Student : req.body.StudentModel}},
      function (err ,data) {
        if(err) {
          res.json({'state': 'no', 'msg': 'vous avez un erreur' + err})
        }

        else {
          res.json({'state': 'ok', 'msg':'group updated'})
        }
      }
    )

  }







}
