import {Request} from 'express';
import {getCustomRepository} from 'typeorm';
import {ComplimentRepository} from
  '../database/repositories/ComplimentRepository';

export class ListUserComplimentsService {
  async execute({user_id}: Request) {
    const complimentsRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentsRepository
        .find({user_receiver: user_id});

    return compliments;
  }
}
