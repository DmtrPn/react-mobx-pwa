import { ApiResponseProperty } from '@nestjs/swagger';

import { MovieViewModel } from './view-model/MovieViewModel';

export class MovieListResponse {

    @ApiResponseProperty({
        type: [MovieViewModel],
    })
    public movies: MovieViewModel[];

}
