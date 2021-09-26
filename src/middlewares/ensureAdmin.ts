import {Request, Response, NextFunction} from 'express';

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  // mockup pois ainda não tem geração de token
  const adm = false;

  if (!adm) return res.status(401).json({'Error:': 'Unauthorized'});

  next();
}
