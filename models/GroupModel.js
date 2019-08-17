const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
  {

    name: {
      type: String,
      required: true


    },
    Student: [{
      type: mongoose.Schema.ObjectId,
      ref: "StudentModel"
    }]

  }

);

module.exports = mongoose.model("group" , groupSchema);
