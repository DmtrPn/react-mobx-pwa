import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, MinLength, IsString } from 'class-validator';

import { AffirmationCreateData } from '@catalog/domain/affirmation/types';

export class AffirmationCreateParams implements AffirmationCreateData {

    @IsUUID('4')
    @ApiProperty({ format: 'uuid' })
    public id: string;

    @IsString()
    @MinLength(3)
    @ApiProperty()
    public text: string;

}
