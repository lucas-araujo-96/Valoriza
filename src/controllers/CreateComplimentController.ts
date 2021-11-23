import {CreateComplimentService} from '../services/CreateComplimentService';
import {NextFunction, Request, Response} from 'express';

export class CreateComplimentController {
  public async handle(req: Request, res: Response, next: NextFunction) {
    const createComplimentService = new CreateComplimentService();

    const {tag_id, user_receiver, message} = req.body;
    const user_sender = req.user_id;

    let compliment;

    try {
      compliment = await createComplimentService.execute(
          {tag_id, user_sender, user_receiver, message},
      );
      return res.status(200).json(compliment);
    } catch (e) {
      next(e);
    }
  }
}
