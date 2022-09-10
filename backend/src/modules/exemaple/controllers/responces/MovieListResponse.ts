import { ApiResponseProperty } from '@nestjs/swagger';

import { MovieViewModel } from './view-model';

export class MovieListResponse {

    @ApiResponseProperty({
        type: [MovieViewModel],
    })
    public movies!: MovieViewModel[];

}
