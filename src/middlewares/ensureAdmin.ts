import {Request, Response, NextFunction} from 'express';
import {getCustomRepository} from 'typeorm';
import {UserRepository} from '../database/repositories/UserRepository';

export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction) {
  const user_id = req.user_id;

  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.findOne({id: user_id});

  if (!user) return res.status(401).end();

  if (!user.admin) return res.status(401).end();

  next();
}
