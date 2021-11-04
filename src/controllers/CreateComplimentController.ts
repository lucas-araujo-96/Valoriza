import {CreateComplimentService} from '../services/CreateComplimentService';
import {NextFunction, Request, Response} from 'express';

export class CreateComplimentController {
  public async handle(req: Request, res: Response, next: NextFunction) {
    const createComplimentService = new CreateComplimentService();

    const {tag_id, user_sender, user_receiver, message} = req.body;

    let compliment;

    try {
      compliment = await createComplimentService.execute(
          {tag_id, user_sender, user_receiver, message},
      );
      return compliment;
    } catch (e) {
      next(e);
    }
  }
}
