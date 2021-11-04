import {UserRepository} from '../database/repositories/UserRepository';
import {getCustomRepository} from 'typeorm';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';


interface IAuthRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService {
  async execute({email, password}: IAuthRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({email});

    if (!user) throw new Error('Email/Password invalid');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email/Password invalid');

    const token = sign({email: user.email, admin: user.admin},
        'seeeeeeecreeeeeeeeeeeeet', {expiresIn: '1d'});

    return token;
  }
}
