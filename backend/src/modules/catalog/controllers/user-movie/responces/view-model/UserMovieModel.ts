import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserMovieModel {

    @ApiProperty()
    public movieId: string;

    @ApiProperty()
    public userId: string;

    @ApiPropertyOptional()
    public rating?: number;

    @ApiProperty()
    public isViewed: boolean;

    @ApiPropertyOptional()
    public comment?: string;

}
