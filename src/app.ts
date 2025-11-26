import express from 'express';
import routes from './routes';
import logger from './utils/logger';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use('/api', routes);

app.get('/', (_req, res) => res.json({ status: 'ok' }));

export default app;
