import {UserRepository} from '../database/repositories/UserRepository';
import {getCustomRepository} from 'typeorm';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

export class CreateUserService {
  async execute({name, email, admin}: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({email});

    if (userAlreadyExists) throw new Error('User already exists');

    if (!email) throw new Error('Email invalid or not informed');

    const user = userRepository.create({name, email, admin});
    await userRepository.save(user);
    return user;
  }
};
