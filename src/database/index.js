import Sequelize from 'sequelize';
import databaseConfig from './config';

// Models
import models from '../app/models/index';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    Object.keys(models).forEach((model) => {
      models[model].init(this.connection);

      if ('associate' in models[model]) {
        models[model].associate(models);
      }
    });
  }
}

export default new Database();
