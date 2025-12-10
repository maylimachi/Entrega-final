import * as productService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) return res.status(404).json({ error: "Producto no encontrado" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);

    if (!deleted) return res.status(404).json({ error: "Producto no encontrado" });

    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

export const deleteProductByCustomId = async (req, res) => {
  try {
    const deleted = await productService.deleteByCustomId(req.params.customId);

    if (!deleted) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado por customId" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
