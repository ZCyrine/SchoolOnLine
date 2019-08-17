const mongoose = require('mongoose');
const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  }
);
module.exports = mongoose.model("Role",roleSchema);

