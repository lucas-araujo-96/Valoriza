import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

interface ITokenPayload {
  email: string;
  admin: boolean;
  iat: number;
  exp: number;
}

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const token = String(req.headers.authorization).split(' ')[1];

  if (!token) return res.status(401).json('Unauthorized');

  const payload = verify(token, 'seeeeeeecreeeeeeeeeeeeet');

  if (!(payload as ITokenPayload).admin) {
    return res.status(401).json('Unauthorized');
  }

  next();
}
