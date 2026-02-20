import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    step: { type: Number, default: 999 },
    image: { type: String, default: "" },
    ingredients: { type: String, default: "" },
    usage: { type: String, default: "" },
    

    // opcional: quién creó el producto (admin/usuario)
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
