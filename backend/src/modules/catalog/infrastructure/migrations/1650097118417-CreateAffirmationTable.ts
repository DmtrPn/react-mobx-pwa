import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAffirmationTable1650097118417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            CREATE TABLE affirmation (
                affirmation_id UUID PRIMARY KEY,
                text TEXT NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            DROP TABLE affirmation;
        `);
    }

}
