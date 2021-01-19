import { Router } from 'express';

// Controllers
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

// Requests
import user from './app/requests/user';

// Router
const routes = Router();

routes.post('/session', SessionController.index);
routes.post('/user/store', user, UserController.store);

export default routes;
