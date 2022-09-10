import { ApiResponseProperty } from '@nestjs/swagger';

import { MovieViewModel } from './view-model/MovieViewModel';

export class MovieResponse {

    @ApiResponseProperty({
        type: MovieViewModel,
    })
    public movie: MovieViewModel;

}
