import mongoose from "mongoose";

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    require: true,
  },
  reply: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const History = mongoose.models.history || mongoose.model("history", schema);

export default History;