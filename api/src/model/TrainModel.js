import mongoose  from "mongoose"

const Train = new mongoose.Schema({
  // id: {
  //   type: String,
  //   require: true
  // },
  train: {
    type: String,
    require: true
  },
  departureStation: {
    type: String,
    require: true
  },
  arrivalTime: {
    type: String,
    require: true
  },
  stayTime: {
    type: String,
    require: true
  },
  departureTime: {
    type: String,
    require: true
  },
  arrivalStation: {
    type: String,
    require: true
  }
});

export default mongoose.model('Train', Train);
