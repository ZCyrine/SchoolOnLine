//Les modules nodeJS
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var morgan = require('morgan');
var cors = require ('cors');




//router personne
const PersonneRouter = require('./Routers/PersonneRouter');
//router role
const RoleRouter = require('./Routers/RoleRouter');
//router group
const GroupRouter = require('./Routers/GroupRouter');
//router course
const CourseRouter = require('./Routers/CourseRouter');
//router claim
const ClaimRouter = require('./Routers/ClaimRouter');
//router student
const StudentRouter = require('./Routers/StudentRouter');
//router Teacher
const TeacherRouter = require('./Routers/TeacherRouter');
//router Admin
const AdminRouter = require('./Routers/AdminRouter');

const db = require('./models/db');


/*var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'sarouna09@hotmail.com',
    pass: ''
  }
});
var mailOptions = {
  from: 'sarouna09@hotmail.com',
  to: 'lindahrichi@gmail.com',
  subject: 'hello my friend',
  text: 'Gunaydin'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/

const app = express();

app.use(cors('*'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"))

app.use('/personne' , PersonneRouter);
app.use('/role' , RoleRouter);
app.use('/group' , GroupRouter);
app.use('/admin' , AdminRouter);
app.use('/student' , StudentRouter);
app.use('/teacher' , TeacherRouter);
app.use('/claim' , ClaimRouter);
app.use('/course' , CourseRouter);


// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use (function(req,err,res,next){
  if(err)
  {
    if(err.status===404)
    {
      res.status(404).json({message:'wrong path'});
      next();
    }
    else(err.status===500)
    {
      res.status(500).json({message:'Internal Server Error' + err + req});
      next();
    }

  }
  else
  {
    res.status(200).json({message:'sucess'});
    next();
  }
})






//execution de server
app.listen(4000,function () {
  console.log("Bonjour");

});
