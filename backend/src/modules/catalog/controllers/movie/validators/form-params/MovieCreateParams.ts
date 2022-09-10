import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID, IsString, IsOptional } from 'class-validator';

import { MovieCreateData } from '@catalog/domain/movie/types';

export class MovieCreateParams implements Omit<MovieCreateData, 'authorId'> {

    @IsUUID('4')
    @ApiProperty({ format: 'uuid' })
    public id: string;

    @IsString()
    @ApiProperty()
    public name: string;

    @IsString()
    @ApiProperty()
    public link: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public description?: string;

}
