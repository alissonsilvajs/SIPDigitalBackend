import { Router } from 'express';

// Controllers
import ProductsController from './app/controllers/ProductController';

// Requests
import product from './app/requests/product';

// Router
const routes = Router();

routes.get('/products', ProductsController.index);
routes.get('/products/:id', ProductsController.show);
routes.post('/products/', product, ProductsController.store);
routes.put('/products/:id', product, ProductsController.update);
routes.delete('/products/:id', ProductsController.delete);

export default routes;
