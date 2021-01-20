import { Router } from 'express';

// Controllers
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProductsController from './app/controllers/ProductController';

// Requests
import user from './app/requests/user';
import product from './app/requests/product';

// Multer
import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

// Router
const routes = Router();

routes.post('/session', SessionController.index);
routes.post('/user/store', user, UserController.store);

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
