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
    if (typeof req.file === "undefined") {
      return res.status(400).send({ error: 'Image is not uploaded' });
    }

    req.body.image = req.file.key;
    const product = await Product.create(req.body);

    return res.json(product);
  }

  async update(req, res) {
    if (typeof req.file !== "undefined") {
      req.body.image = req.file.key;
    }

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
