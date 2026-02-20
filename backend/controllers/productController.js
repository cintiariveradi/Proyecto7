import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      user: req.userId, // viene del middleware
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creando producto" });
  }
};

export const readAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ step: 1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error leyendo productos" });
  }
};

export const readOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "No encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error leyendo producto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "No encontrado" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "No encontrado" });
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando producto" });
  }
};
export const readByStep = async (req, res) => {
  try {
    const step = Number(req.params.step);
    const product = await Product.findOne({ step });
    if (!product) return res.status(404).json({ message: "No encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error leyendo producto" });
  }
};