import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { MovieUpdateParams } from './form-params/MovieUpdateParams';

export class MovieUpdateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => MovieUpdateParams)
    public movie!: MovieUpdateParams;

}
