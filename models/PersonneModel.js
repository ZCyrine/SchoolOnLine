//import mongoose
const  mongoose  = require('mongoose');
//import package bcrypt for encryption password
const bcrypt = require('bcrypt');

const baseOptionts = {
  discriminatorKey :'usertype',
  collection :  'users',
}
//definition of attribute
const personne = mongoose.model('personne', new mongoose.Schema(
  {
    nic :{
      type : Number,
      required : true
    },
    name:{
      type: String ,
      required : true ,
      trim : true

    },
    lastname:{
      type: String ,
      required : true ,
      trim : true

    },
    email:{
      type: String  ,
      required : true ,


    },
    datebirth:{
      type: Date ,
      required : true ,


    },
    phonenumber:{
      type: Number,
      required : true ,


    },
    password:{
      type: String,
      required : true ,
      trim : true

    },
    role: {
      type : mongoose.Schema.ObjectId,
      ref : "RoleModel"
    },
    gender :{
      type: String,
      required: true,
    }
  }
  , baseOptionts

)
//encryption password
  .pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10)

    next();

  }))



//name of collection
module.exports = mongoose.model("personne",'personne');
