import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEntitiesColumnToUser1652010106497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE users ADD COLUMN entities TEXT[] NOT NULL DEFAULT  '{}';
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE users DROP COLUMN entities;
        `);
    }

}
