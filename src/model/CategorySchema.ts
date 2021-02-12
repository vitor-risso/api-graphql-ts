import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  description:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Categories', schema)
