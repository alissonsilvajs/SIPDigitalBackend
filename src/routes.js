import { Router } from 'express';

// Multer
import multer from 'multer';
import multerConfig from './config/multer';

// Controllers
import ProductsController from './app/controllers/ProductController';

// Requests
import product from './app/requests/product';

// Router
const routes = Router();

const upload = multer(multerConfig);

routes.get('/products', ProductsController.index);
routes.get('/products/:id', ProductsController.show);
routes.post(
  '/products/',
  upload.single('image'),
  product,
  ProductsController.store
);
routes.put(
  '/products/:id',
  upload.single('image'),
  product,
  ProductsController.update
);
routes.delete('/products/:id', ProductsController.delete);

export default routes;
