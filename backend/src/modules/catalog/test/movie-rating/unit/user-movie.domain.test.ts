import '@core/test/unitTestRanner';
import { expectError } from '@core/test/expectError';

import { UserMovie } from '@catalog/domain/user-movie/UserMovie';
import { InvalidRating } from '@catalog/domain/user-movie/errors/InvalidRating';

import {
    getFakeUserMovieCreationParams,
    getFakeUserMovieUpdateParams,
} from '../utils/userMovieFakeData';

@Describe()
export class UserMovieDomainTest {

    @Test()
    public createUserMovie(): void {
        const data = getFakeUserMovieCreationParams();
        const userMovie = new UserMovie(data);

        expect(userMovie).toBeInstanceOf(UserMovie);
        expect(userMovie.dto).toEqual(data);
    }

    @Test()
    @expectError(InvalidRating)
    public createUserMovieWithNotValidMinRating(): void {
        const { rating, ...data } = getFakeUserMovieCreationParams();
        new UserMovie({ rating: -1, ...data });
    }

    @Test()
    @expectError(InvalidRating)
    public createUserMovieWithNotValidMaxRating(): void {
        const { rating, ...data } = getFakeUserMovieCreationParams();
        new UserMovie({ rating: 11, ...data });
    }

    @Test()
    public updateUserMovie(): void {
        const userMovie = new UserMovie(getFakeUserMovieCreationParams());
        const updateData = getFakeUserMovieUpdateParams();

        userMovie.update(updateData);

        expect(userMovie.dto.rating).toEqual(updateData.rating);
    }

    @Test()
    @expectError(InvalidRating)
    public updateUserMovieWithNotValidMinRating(): void {
        const userMovie = new UserMovie(getFakeUserMovieCreationParams());

        userMovie.update({ rating: -1 });
    }

    @Test()
    @expectError(InvalidRating)
    public updateUserMovieWithNotValidMaxRating(): void {
        const userMovie = new UserMovie(getFakeUserMovieCreationParams());

        userMovie.update({ rating: 11 });
    }

}
