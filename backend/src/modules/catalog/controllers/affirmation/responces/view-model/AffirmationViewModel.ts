import { ApiProperty } from '@nestjs/swagger';

export class AffirmationViewModel {

    @ApiProperty()
    public id!: string;

    @ApiProperty()
    public text: string;

}
