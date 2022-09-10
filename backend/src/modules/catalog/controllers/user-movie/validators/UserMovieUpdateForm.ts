import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { UserMovieUpdateParams } from './form-params/UserMovieUpdateParams';

export class UserMovieUpdateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => UserMovieUpdateParams)
    public userMovie!: UserMovieUpdateParams;

}
