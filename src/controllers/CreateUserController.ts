import {Request, Response, NextFunction} from 'express';
import {CreateUserService} from '../services/CreateUserService';

export class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const {name, email, admin, password} = req.body;

    const createUserService = new CreateUserService();

    let user;
    try {
      user = await createUserService.execute({name, email, admin, password});
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}
