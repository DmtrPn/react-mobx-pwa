import {
    UserMovieCreateData,
    UserMovieUpdateData,
    UserMovieDto,
} from './types';
import { InvalidRating } from './errors/InvalidRating';
import { SerializableEntity } from '@common/domain/SerializableEntity';

export class UserMovie extends SerializableEntity<UserMovieCreateData, UserMovieUpdateData, UserMovieDto> {

    public static newInstance(params: UserMovieCreateData): UserMovie {
        return new UserMovie(params);
    }

    private readonly movieId!: string;
    private readonly userId!: string;
    private rating?: number;
    private isViewed!: boolean;
    private comment?: string;

    public get dto(): UserMovieDto {
        return {
            movieId: this.movieId,
            userId: this.userId,
            rating: this.rating,
            isViewed: this.isViewed,
            comment: this.comment,
        };
    }

    public update({ rating }: UserMovieUpdateData): void {
        this.checkRating(rating);
        this.rating = rating;

    }

    protected checkCreateParams({ rating }: UserMovieCreateData) {
        this.checkRating(rating);
    }

    private checkRating(rating: number): void {
        if (rating < 0 || rating > 10) {
            throw new InvalidRating();
        }
    }
}
