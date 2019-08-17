const mongoose = require('mongoose');

const ClaimSchema = mongoose.Schema(
  {

    subject: {
      type : String,
      //required:  true,
      trim : true
    },
    text:{
      type : String,
      required : true,
      trim : true
    },
    object :{
      type : String
    },
    email : {
      type : String,
      required: true
    }
  })
module.exports = mongoose.model("Claim",ClaimSchema);
