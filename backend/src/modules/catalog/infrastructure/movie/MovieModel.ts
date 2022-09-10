import { Entity, Column, OneToMany, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { MovieStatus } from '@components/common/enums';
import { BaseModel } from '@common/infrastructure/BaseModel';
import { UserModel } from '@user/infrastructure/user/UserModel';
import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';

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

    @ManyToOne(() => UserModel, model => model.movies)
    @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
    public author?: UserModel;

    @OneToMany(() => UserMovieModel, model => model.movie)
    public userMovies?: UserMovieModel[];

}
