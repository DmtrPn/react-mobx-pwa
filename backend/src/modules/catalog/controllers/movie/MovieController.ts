import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Inject } from 'typescript-ioc';

import { AuthUserData } from '@core/types';

import { ActionType, EntityName } from '@core/access-control/types';
import { Uuid } from '@common/controllers/validators/Uuid';
import { Public } from '@components/decorators/Pubic';
import { IMovieCrudService } from '@catalog/domain/movie/IMovieCrudService';
import { IMovieQueryService } from '@catalog/domain/movie/IMovieQueryService';
import { User } from '@components/decorators';
import { Action } from '@components/decorators/Action';

import { MovieListResponse } from './responces/MovieListResponse';
import { MovieResponse } from './responces/MovieResponse';
import { MovieCreateForm } from './validators/MovieCreateForm';
import { MovieUpdateForm } from './validators/MovieUpdateForm';

@ApiTags('Фильмы')
@Controller('movie')
export class MovieController {

    @Inject private movieCrudService: IMovieCrudService;
    @Inject private movieQueryService: IMovieQueryService;

    @Public()
    @ApiOkResponse({ type: MovieListResponse })
    @Get('/')
    public async find(): Promise<MovieListResponse> {
        const movies = await this.movieQueryService.find({});
        return { movies };
    }

    @Public()
    @ApiOkResponse({ type: MovieResponse })
    @Get('/:id')
    public async getMovie(
        @Param() { id }: Uuid,
    ): Promise<MovieResponse> {
        const movie = await this.movieQueryService.getById(id);
        return { movie };
    }

    @Action(EntityName.Movie, ActionType.Create)
    @Post('/')
    public async create(
        @Body() { movie }: MovieCreateForm,
        @User() user: AuthUserData,
    ): Promise<void> {
        await this.movieCrudService.create({ ...movie, authorId: user.id });
    }

    @Action(EntityName.Movie, ActionType.Edit)
    @Put('/:id')
    public async update(
        @Param() { id }: Uuid,
        @Body() { movie }: MovieUpdateForm,
    ): Promise<void> {
        await this.movieCrudService.update(id, movie);
    }

    @Action(EntityName.Movie, ActionType.Remove)
    @Delete('/:id')
    public async remove(
        @Param() { id }: Uuid,
    ): Promise<void> {
        await this.movieCrudService.remove(id);
    }

}
