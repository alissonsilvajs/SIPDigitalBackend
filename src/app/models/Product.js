import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        price: Sequelize.STRING(100),
        description: Sequelize.STRING(100),
        image: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: 'product',
      }
    );
  }
}

export default Product;
