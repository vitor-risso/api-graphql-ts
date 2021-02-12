import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories"
  }
})

export default mongoose.model('Video', schema)
