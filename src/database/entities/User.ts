import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn} from 'typeorm';

/* O decorator da classe define ela como entity de um tabela e os das colunas
** como as colunas (não é preciso informar no decorator de qual coluna se
** tiverem os mesmos nomes), colunas de dados gerados, como datas e id têm
** decorators diferentes */
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /* o constructor pode ficar vazio se não tiver nenhum tratamento a
    ** ser feito manualmente na entity*/
    constructor() {}
}
