import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Uuid {

    @IsUUID('4')
    @ApiProperty()
    public id!: string;

}
