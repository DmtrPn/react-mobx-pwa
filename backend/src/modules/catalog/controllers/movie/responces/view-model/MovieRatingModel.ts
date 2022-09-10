import { ApiProperty } from '@nestjs/swagger';

export class MovieRatingModel {

    @ApiProperty()
    public movieId: string;

    @ApiProperty()
    public userId: string;

    @ApiProperty()
    public rating: number;

}
