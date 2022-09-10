import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// import { UserCreateParams } from 'services/user/controllers/validators/form-params/UserCreateParams';

export class MovieCreateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => MovieCreateForm)
    public movie!: any;

}
