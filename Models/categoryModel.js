import mongoose from "mongoose";

// categories => field => ['type', 'color']
const categoryModel = mongoose.Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

export default mongoose.model("Category", categoryModel);
