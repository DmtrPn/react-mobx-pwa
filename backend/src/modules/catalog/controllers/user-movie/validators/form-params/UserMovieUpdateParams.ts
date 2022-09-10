import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, Min, IsOptional, IsString, IsBoolean, Max, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

import { UserMovieCreateData } from '@catalog/domain/user-movie/types';

export class UserMovieUpdateParams implements UserMovieCreateData {

    @IsUUID()
    @ApiProperty()
    public movieId: string;

    @IsUUID()
    @ApiProperty()
    public userId: string;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(10)
    @Transform(({ value }) => Number(value))
    @ApiPropertyOptional()
    public rating?: number;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => Boolean(value))
    @ApiPropertyOptional()
    public isViewed?: boolean;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public comment?: string;

}
