import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { MovieStatus } from '@common/enums';

export class MovieViewModel {

    @ApiProperty()
    public id!: string;

    @ApiProperty({ enum: MovieStatus, enumName: 'MovieStatus' })
    public status!: MovieStatus;

    @ApiProperty()
    public link: string;

    @ApiProperty()
    public name: string;

    @ApiPropertyOptional()
    public description?: string;

    @ApiProperty()
    public authorId: string;

    @ApiProperty()
    public rating: number;

}
