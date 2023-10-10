import express, { Express } from 'express';
import cors from 'cors';
import sendsay from './sendsay/index.js';
import { CORS, PORT } from './enviroments.js';

const app: Express = express();

app.disable('x-powered-by');
app.use(cors({ origin: [CORS] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/sendsay', sendsay);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
