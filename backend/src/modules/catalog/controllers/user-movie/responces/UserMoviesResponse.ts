import { ApiResponseProperty } from '@nestjs/swagger';

import { UserMovieModel } from './view-model/UserMovieModel';

export class UserMoviesResponse {

    @ApiResponseProperty({
        type: [UserMovieModel],
    })
    public userMovies: UserMovieModel[];

}
