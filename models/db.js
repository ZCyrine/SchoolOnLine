const mongoose = require('mongoose');


var mongoDB = "mongodb://127.0.0.1/schoolonline";
mongoose.connect(mongoDB,{useNewUrlParser : true});


var db = mongoose.connection ;
console.log("Connecter");
