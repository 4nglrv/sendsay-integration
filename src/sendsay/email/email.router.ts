import { Router } from 'express';
import { addController } from './email.controllers.js';

const emailRouter = Router();

emailRouter.post('/add', async (req, res) => await addController(req, res));

export default emailRouter;
