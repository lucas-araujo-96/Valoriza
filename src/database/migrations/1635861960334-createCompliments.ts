import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createCompliments1635861960334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'compliments',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'user_sender',
              type: 'integer',
            },
            {
              name: 'user_receiver',
              type: 'integer',
            },
            {
              name: 'tag_id',
              type: 'integer',
            },
            {
              name: 'message',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'FK_user_compliments',
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              columnNames: ['user_sender'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
            {
              name: 'FK_user_complimented',
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              columnNames: ['user_receiver'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
            {
              name: 'FK_tag',
              referencedTableName: 'tags',
              referencedColumnNames: ['id'],
              columnNames: ['tag_id'],
              onDelete: 'SET NULL',
              onUpdate: 'SET NULL',
            },
          ],
        }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('compliments');
  }
}
