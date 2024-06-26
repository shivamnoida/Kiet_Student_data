import mongoose from "mongoose";

const User= new mongoose.Schema({
  ImageURL:{
type:String,
requireed: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  }

});

export default mongoose.model('Users', User);
