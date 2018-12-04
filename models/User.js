const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema (
  { 
    username:{
    type:String,
    default: ''
  },
    email: String
  },{
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

module.exports = mongoose.model('User', userSchema)
