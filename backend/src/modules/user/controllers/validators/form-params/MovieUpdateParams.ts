import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';

import { MovieUpdateData } from '@catalog/domain/movie/types';
import { MovieStatus } from '@common/enums';

export class MovieUpdateParams implements MovieUpdateData {

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public name?: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public link?: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public description?: string;

    @IsEnum(MovieStatus)
    @IsOptional()
    @ApiPropertyOptional({ type: String, enum: MovieStatus })
    public status?: MovieStatus;

}
