import bcrypt from 'bcrypt';
import User from '../models/User';
import logger from '../../config/logger';

const saltRounds = 12;
const encryptPassword = (password) => bcrypt.hashSync(password, saltRounds);

class UserController {
  async store(req, res) {
    try {
      const { name, email, password, confirmPassword } = req.body;

      // Verifica se as senhas se coincidem
      if (password !== confirmPassword) {
        return res.status(400).send({
          error: "Password don't match",
        });
      }

      // Verifica se o usuário existe
      const existUser = await User.findAll({
        where: {
          email: email,
        },
      });

      if (typeof existUser !== 'undefined' && existUser.length > 0) {
        return res.status(400).send({
          error: 'User already exist',
        });
      }

      // Encriptografa a senha
      req.body.password = encryptPassword(password);
      delete req.body.confirmPassword;

      // Cria o usuário
      const user = await User.create(req.body);

      return res.status(200).send(user);
    } catch (err) {
      logger.log('error', err.message);

      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default new UserController();
