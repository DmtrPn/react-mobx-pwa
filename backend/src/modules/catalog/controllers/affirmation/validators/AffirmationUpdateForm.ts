import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { AffirmationUpdateParams } from './form-params/AffirmationUpdateParams';

export class AffirmationUpdateForm {

    @ApiProperty()
    @ValidateNested()
    @Type(() => AffirmationUpdateParams)
    public affirmation!: AffirmationUpdateParams;

}
