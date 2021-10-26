import {UserRepository} from '../database/repositories/UserRepository';
import {getCustomRepository} from 'typeorm';
/* Como estamos usando um repositório "customizado", não dá pra instanciar
** ele direto, precisa importar esse getCustomRepository */

/* Interface para os dados do usuário */
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

export class CreateUserService {
  async execute({name, email, admin, password}: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({email});

    if (userAlreadyExists) throw new Error('User already exists');

    if (!email) throw new Error('Email invalid or not informed');

    const user = userRepository.create({name, email, admin, password});
    await userRepository.save(user);
    return user;

    /* IMPORTANTE: repository.create() instancia a entrada do bd, mas é
    ** preciso chamar o .save manualmente para inseri-la */
  }
};
