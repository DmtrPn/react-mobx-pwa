import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString, IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

import { MovieUpdateData } from '@catalog/domain/movie/types';
import { MovieStatus } from '@components/common/enums';

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

    @IsInt()
    @Min(0)
    @Max(10)
    @Transform(({ value }) => Number(value))
    @IsOptional()
    @ApiPropertyOptional()
    public rating?: number;

}
