import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import Routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
