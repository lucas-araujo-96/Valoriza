import {ComplimentRepository}
  from '../database/repositories/ComplimentRepository';
import {UserRepository}
  from '../database/repositories/UserRepository';
import {getCustomRepository} from 'typeorm';

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

export class CreateComplimentService {
  public async execute(
      {tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
    if (!tag_id || !user_sender || !user_receiver) {
      throw new Error('Erro interno do servidor');
    }

    if (user_sender === user_receiver) {
      throw new Error('Não é possível criar um elogio para si mesmo');
    }

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({id: user_receiver});

    if (!user) throw new Error('Usuário inválido');

    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliment = complimentRepository.create(
        {user_sender, user_receiver, tag_id, message},
    );
    await complimentRepository.save(compliment);

    return compliment;
  }
}
