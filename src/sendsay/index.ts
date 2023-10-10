import { Router } from 'express';
import emailRouter from './email/email.router.js';

const sendsay = Router();

sendsay.use('/email', emailRouter);

export default sendsay;
