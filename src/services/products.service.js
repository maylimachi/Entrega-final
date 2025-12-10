import * as productModel from "../models/products.model.js";

export const getAllProducts = async () => {
  return await productModel.getAll();
};

export const getProductById = async (id) => {
  return await productModel.getById(id);
};

export const createProduct = async (productData) => {
  return await productModel.create(productData);
};

export const deleteProduct = async (id) => {
  return await productModel.remove(id);
};

export const deleteByCustomId = async (customId) => {
  return await productModel.deleteByCustomId(customId);
};

