const mongoose = require('mongoose');

const personne = require('../models/PersonneModel');

const studentSchema = personne.discriminator('StudentModel',mongoose.Schema(
  {

    levelstudy : {
      type : String ,
      required : true,
      trim : true
    },
    registnumber: {
      type : Number,
      required : true,
      trim : true
    }
  }))
module.exports = mongoose.model("StudentModel");
