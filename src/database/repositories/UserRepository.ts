import {EntityRepository, Repository} from 'typeorm';
import {User} from '../entities/User';

/* Decorator, este serve para definir de qual entidade é esse repositório */
@EntityRepository(User)
export class UserRepository extends Repository<User> {}
/* Repositório, serve para trazer os métodos que os models têm no sequelize,
** neste caso, o customizado que está definido aqui extende o básico (que
** recebe a entidade como tipo) */
