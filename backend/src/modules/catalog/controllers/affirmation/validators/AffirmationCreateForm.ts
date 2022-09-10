import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { AffirmationCreateParams } from './form-params/AffirmationCreateParams';

export class AffirmationCreateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => AffirmationCreateParams)
    public affirmation!: AffirmationCreateParams;

}
