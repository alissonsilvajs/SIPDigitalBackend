import app from './app';
import logger from './config/logger';

app.listen(process.env.PORT, () =>
  logger.info(
    'info',
    `O servidor está rodando na porta: localhost:${process.env.PORT}`
  )
);
