import { MigrationInterface, QueryRunner } from 'typeorm';
import { RoleName } from '@core/access-control/types';

export class AddRolesColumnToUser1652003674500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE users ADD COLUMN roles TEXT[] NOT NULL DEFAULT  '{"${RoleName.User}"}';
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE users DROP COLUMN roles;
        `);
    }

}
