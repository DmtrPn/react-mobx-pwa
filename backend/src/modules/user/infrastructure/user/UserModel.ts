import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

import { UserStatus } from '@common/enums';

import { BaseModel } from '@common/infrastructure/BaseModel';
import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { RoleName, EntityName } from '@core/access-control/types';

@Entity('users')
export class UserModel extends BaseModel<UserModel> {

    @PrimaryColumn({ name: 'user_id' })
    public id: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public status: UserStatus;

    @Column({ select: false })
    public password?: string;

    @Column({ type: 'text', array: true })
    public roles: RoleName[];

    @Column({ type: 'text', array: true })
    public entities: EntityName[];

    @OneToMany(() => MovieModel, movie => movie.author)
    public movies?: MovieModel[];

}
