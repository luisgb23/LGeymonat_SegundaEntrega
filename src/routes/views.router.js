import { Router } from 'express';

const router = Router();

const viewsRouter = (productManager) => {
  router.get('/home', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('home', { products });
  });

  router.get('/realtimeproducts', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('realTimeProducts', { products });
  });

  return router;
};

export default viewsRouter;

