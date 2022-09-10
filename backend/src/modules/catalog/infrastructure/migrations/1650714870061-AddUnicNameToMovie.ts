import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUnicNameToMovie1650714870061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE movie ADD CONSTRAINT movie_name_key UNIQUE (name);
            ALTER TABLE movie ADD CONSTRAINT movie_link_key UNIQUE (link);
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE movie DROP CONSTRAINT movie_name_key;
            ALTER TABLE movie DROP CONSTRAINT movie_link_key;
        `);
    }

}
