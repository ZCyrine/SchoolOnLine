const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    title : {
      type : String,
      required: true,
      trim : true
    },
    description : {
      type : String,
      trim : true,
      required: true
    },
    duration : {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required:true
    },
    file : {
      type :String,
      required : true
    }
  })
module.exports = mongoose.model("Course",courseSchema);
