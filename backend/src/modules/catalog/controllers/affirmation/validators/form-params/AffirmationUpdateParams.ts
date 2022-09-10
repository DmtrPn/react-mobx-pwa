import { ApiPropertyOptional } from '@nestjs/swagger';
import { MinLength, IsString, IsOptional } from 'class-validator';

import { AffirmationUpdateData } from '@catalog/domain/affirmation/types';

export class AffirmationUpdateParams implements AffirmationUpdateData {

    @IsString()
    @MinLength(3)
    @IsOptional()
    @ApiPropertyOptional()
    public text?: string;

}
