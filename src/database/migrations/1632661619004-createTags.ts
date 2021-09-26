import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createTags1632661619004 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'tags',
          columns: [
            {
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
              name: 'created_at',
              type: 'date',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'date',
              default: 'now()',
            },
          ],
        }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tags');
  }
}
