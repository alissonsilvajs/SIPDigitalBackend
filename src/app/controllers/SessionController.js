import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';
import logger from '../../config/logger';

class SessionController {
  async index(req, res) {
    try {
      const { email } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      const userId = user.id;

      if (!userId) {
        return res.status(400).json({ error: 'User not exists' });
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(400).json({ error: 'The password is invalid' });
      }

      return res.json({
        token: jwt.sign({ userId }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      logger.log('error', err.message);
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default new SessionController();
