const  mongoose  = require('mongoose');
const personne = require('./PersonneModel')

const adminSchema = personne.discriminator('Admin',new mongoose.Schema(
  {
  }))


module.exports = mongoose.model("Admin");


