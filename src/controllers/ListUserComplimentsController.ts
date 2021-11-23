import {NextFunction, Request, Response} from 'express';
import {ListUserComplimentsService}
  from '../services/ListUserComplimentsService';

export class ListUserComplimentsController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const listUserComplimentsService = new ListUserComplimentsService();

    let compliments;

    try {
      compliments = await listUserComplimentsService.execute(req);
      return res.status(200).json(compliments);
    } catch (e) {
      next(e);
    }
  }
}
