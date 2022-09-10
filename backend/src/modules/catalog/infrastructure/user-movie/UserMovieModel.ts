import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';

import { BaseModel } from '@common/infrastructure/BaseModel';
import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';

@Entity('user_movie')
export class UserMovieModel extends BaseModel<UserMovieModel> {

    @PrimaryColumn()
    public movieId: string;

    @PrimaryColumn()
    public userId: string;

    @Column({ type: 'int' })
    public rating?: number;

    @Column({ type: 'boolean' })
    public isViewed: boolean;

    @Column()
    public comment?: string;

    @ManyToOne(() => MovieModel, model => model.userMovies)
    @JoinColumn({ name: 'movie_id', referencedColumnName: 'id' })
    public movie?: MovieModel;

}
