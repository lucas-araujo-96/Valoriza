import {Request, Response, NextFunction} from 'express';
import {CreateTagService} from '../services/CreateTagService';

export class CreateTagController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const {name} = req.body;
    
    const createTagService = new CreateTagService();

    let tag;

    try {

      tag = await createTagService.execute({name});

      return res.status(200).json(tag);

    } catch (e) {

      next(e);

    }
  }
}
