import { Request, Response } from 'express';
import { validateEmail } from '../../misc/utils.js';

export function emailSerializer(req: Request, res: Response): string {
  if (!req.body?.email) {
    res.status(400).send({ msg: 'Email key is not found' });

    throw new Error(
      `Log [${req.ip}]: email key is not found. req.body: ${JSON.stringify(
        req.body,
      )}`,
    );
  } else if (!validateEmail(req.body?.email)) {
    res.status(400).send({ msg: 'Email is incorrect' });

    throw new Error(
      `Log [${req.ip}]: email is incorrect. req.body: ${JSON.stringify(
        req.body,
      )}`,
    );
  }

  return req.body.email;
}
