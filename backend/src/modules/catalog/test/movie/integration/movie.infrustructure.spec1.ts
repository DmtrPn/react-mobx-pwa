import '@core/test/testRunner';

import { MovieCrudService } from '@catalog/infrastructure/movie/MovieCrudService';

import { getFakeMovieCreationParams, getFakeMovieUpdateParams } from '../utils/movieFakeData';

describe('MovieCrudService', () => {

    const movieCrudService = new MovieCrudService();
    const movie = getFakeMovieCreationParams();

    describe('create ', () => {
        test('create success', async () => {
            await movieCrudService.create(movie);
            const created = await movieCrudService.getById(movie.id);

            expect(movie).toEqual(created);
        });
    });

    describe('findAll', () => {
        test('should return an array of movies', async () => {
            const movies = await movieCrudService.find({});

            expect(movies.length).toEqual(1);
            expect(movies[0]).toEqual(movie);
        });
    });

    describe('update', () => {
        test('update success', async () => {
            const updateParams = getFakeMovieUpdateParams();

            await movieCrudService.update(movie.id, updateParams);

            const updatedMovie = await movieCrudService.getById(movie.id);

            expect(updatedMovie).toEqual({ ...movie, ...updateParams });
        });
    });
});