import { Controller, Put, Get, Param, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Inject } from 'typescript-ioc';

import { MovieRatingUpdateCommand } from '@catalog/use-case/movie-rating/MovieRatingUpdateCommand';
import { Action } from '@components/decorators/Action';
import { ActionType, EntityName } from '@core/access-control/types';
import { IUserMovieQueryService } from '@catalog/domain/user-movie/IUserMovieQueryService';
import { Uuid } from '@common/controllers/validators/Uuid';

import { UserMoviesResponse } from './responces/UserMoviesResponse';
import { UserMovieUpdateForm } from './validators/UserMovieUpdateForm';

@ApiTags('Фильмы пользователя')
@Controller('user-movie')
export class UserMovieController {

    @Inject private userMovieQueryService: IUserMovieQueryService;

    @Action(EntityName.UserMovie, ActionType.Edit)
    @Put('/')
    public async update(
        @Body() { userMovie }: UserMovieUpdateForm,
    ): Promise<void> {
        const command = new MovieRatingUpdateCommand(userMovie);

        await command.execute();
    }

    @Action(EntityName.UserMovie, ActionType.View)
    @ApiOkResponse({ type: UserMoviesResponse })
    @Get('/:id')
    public async getUserMovies(
        @Param() { id: userId }: Uuid,
    ): Promise<UserMoviesResponse> {
        const userMovies = await this.userMovieQueryService.find({ userId });

        return { userMovies };
    }

}
