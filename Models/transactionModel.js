import mongoose from "mongoose";

// transactions  => field => ['name', 'type', 'amount', 'date']
const transactionModel = mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionModel);
