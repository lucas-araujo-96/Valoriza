import {Request, Response, NextFunction, request} from 'express';
import {verify} from 'jsonwebtoken';

interface IRequest {
    sub: string;
}

export function ensureLogged(req: Request, res: Response, next: NextFunction) {
  const token = String(req.headers.authorization).split(' ')[1];

  if (!token) return res.status(401).end();

  try {
    const {sub} = verify(token, 'seeeeeeecreeeeeeeeeeeeet') as IRequest;

    request.user_id = sub;

    return next();
  } catch (e) {
    return res.status(401).end();
  }
}
