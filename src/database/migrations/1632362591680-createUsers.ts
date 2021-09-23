import {MigrationInterface, QueryRunner, Table} from 'typeorm';

/* Lembrar: queryRunner.createTable() recebe uma new Table como argumento,
** que, por si, recebe um objeto com name(string) e columns(array de objetos) */

export class createUsers1632321693647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [{
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'admin',
            type: 'boolean',
            default: false,
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'date',
            default: 'now()',
          }],
        }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
