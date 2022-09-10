import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { MovieCreateParams } from './form-params/MovieCreateParams';

export class MovieCreateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => MovieCreateParams)
    public movie!: MovieCreateParams;

}
