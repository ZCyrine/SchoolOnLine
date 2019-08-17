const mongoose = require('mongoose');

const personne = require('../models/PersonneModel');

const teacherSchema = personne.discriminator('TeacherModel',mongoose.Schema(
  {

    salary : {
      type: Number,
      required : true
    },
    nbrehour : {
      type : Number,
      required:  true
    },
    group :[{
      type : mongoose.Schema.ObjectId,
      ref : "group"
    }],
  }))
module.exports = mongoose.model("TeacherModel");

