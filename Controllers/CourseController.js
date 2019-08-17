// exporter model
const Course = require("../models/CourseModel");

//install multer with npm install multer
//require multer
const multer = require('multer');
const fs = require('fs');
///create destination of file
const upload = multer({dest: __dirname + '/uploads/photos'});
module.exports = {
  //function create
  create: function (req, res) {
    //upload file
    var file = __dirname + '/uploads/' + req.file.originalname;
    fs.readFile(req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
        if (err) {
          console.error(err);
          var response = {
            message: 'Sorry, file couldn\'t be uploaded.',
            filename: req.file.originalname
          };
        } else {
          response = {
            message: 'File uploaded successfully',
            filename: req.file.originalname
          };


          const course = new Course({
           title: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.duration,
            file : req.body.file


          })

          course.save(function (err) {
            if (err) {
              res.json({'state': 'no', 'msg': 'erreur' + err})
            } else {
              res.json({'state': 'ok', 'msg': 'successfully added'})
            }


          })
        }
      })
    })

  },
  //delete function
  delete: function (req, res) {
    Course.findOneAndRemove({'_id': req.params.id}, function (err, Course) {
      if (err) {
        res.json({'state': 'no', 'msg': 'erreur' + err})
      } else {
        res.json({'state': 'ok', 'msg': 'successful removal'})
      }
    })
  },
  //find function
  find: function (req, res) {
    Course.findById({_id: req.params.id}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': ' erreur' + err})
      } else {
        res.json({'state': 'ok', 'msg': 'Course found', data})
      }

    })

  },
  //findall function
  findall: function (req, res) {
    Course.find({}, function (err, data) {
      if (err) {
        res.json({'state': 'no', 'msg': 'vous avez un erreur' + err})
      } else {
        res.json({'state': 'ok', 'msg': 'courses found', data})
      }

    })

  },
  //update function
  update: function (req, res) {
    Course.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Course) {
      if (err) return next(err);
      res.send('udpated.');
    });
  },
}
