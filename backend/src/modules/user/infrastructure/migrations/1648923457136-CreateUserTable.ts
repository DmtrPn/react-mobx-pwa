import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1648923457136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            CREATE TABLE users (
                user_id UUID PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                status TEXT NOT NULL DEFAULT 'active',
                password TEXT
            );
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            DROP TABLE users;
        `);
    }

}
