import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';
const router = Router();
const manager = new ProductManager('./src/data/products.json');

router.get('/', async (req, res) => {
  const products = await manager.getProducts();
  res.json(products);
});

router.get('/:pid', async (req, res) => {
  const product = await manager.getProductById(parseInt(req.params.pid));
  product ? res.json(product) : res.status(404).send('Producto no encontrado');
});

router.post('/', async (req, res) => {
  const newProduct = await manager.addProduct(req.body);
  res.status(201).json(newProduct);
});

router.put('/:pid', async (req, res) => {
  const updated = await manager.updateProduct(parseInt(req.params.pid), req.body);
  updated ? res.json(updated) : res.status(404).send('No se pudo actualizar');
});

router.delete('/:pid', async (req, res) => {
  await manager.deleteProduct(parseInt(req.params.pid));
  res.sendStatus(204);
});

export default router;
