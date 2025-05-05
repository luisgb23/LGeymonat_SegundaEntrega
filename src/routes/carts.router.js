import { Router } from 'express';
import CartManager from '../managers/CartManager.js';
const router = Router();
const manager = new CartManager('./src/data/carts.json');

router.post('/', async (req, res) => {
  const newCart = await manager.createCart();
  res.status(201).json(newCart);
});

router.get('/:cid', async (req, res) => {
  const cart = await manager.getCartById(parseInt(req.params.cid));
  cart ? res.json(cart) : res.status(404).send('Carrito no encontrado');
});

router.post('/:cid/product/:pid', async (req, res) => {
  const result = await manager.addProductToCart(parseInt(req.params.cid), parseInt(req.params.pid));
  result ? res.json(result) : res.status(404).send('Error al agregar producto');
});

export default router;
