import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  }

  async show(req, res) {
    const product = await Product.findByPk(req.params.id);

    return res.json(product);
  }

  async store(req, res) {
    const image = req.file.key;
    const product = await Product.create(image);

    return res.json(product);
  }

  async update(req, res) {
    let product = await Product.findByPk(req.params.id);

    product = await product.update(req.body);

    return res.json(product);
  }

  async delete(req, res) {
    let product = await Product.findByPk(req.params.id);

    product = await product.destroy(req.body);
    return res.json(product);
  }
}

export default new ProductController();
