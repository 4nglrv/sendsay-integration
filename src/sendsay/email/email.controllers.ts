import { Request, Response } from 'express';
import { emailSerializer } from './email.serializer.js';
import sendsayClient from '../client.js';

export async function addController(req: Request, res: Response) {
  try {
    const email = emailSerializer(req, res);

    const data = (await sendsayClient
      .post({ json: { action: 'member.set', email: email } })
      .json()) as { errors?: Array<object> };

    if (data?.errors) {
      res.status(400).send({ msg: 'Service error', errors: data.errors });
      throw new Error(
        `Log [${req.ip}]: service error ${JSON.stringify(req.body)}`,
      );
    }

    res.send({ msg: 'Subscription successful' });
    console.log(`Log [${req.ip}]: subscription successful ${email}`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
