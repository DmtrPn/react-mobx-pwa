import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { MovieStatus } from '@components/common/enums';
import { BaseModel } from '@common/infrastructure/BaseModel';
import { UserModel } from '@user/infrastructure/user/UserModel';

@Entity('movie')
export class MovieModel extends BaseModel<MovieModel> {

    @PrimaryColumn({ name: 'movie_id' })
    public id: string;

    @Column()
    public link: string;

    @Column()
    public name: string;

    @Column()
    public description?: string;

    @Column()
    public authorId: string;

    @Column()
    public status: MovieStatus;

    @Column({ type: 'int' })
    public rating?: number;

    @ManyToOne(() => UserModel, model => model.movies)
    @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
    public author?: UserModel;

}
