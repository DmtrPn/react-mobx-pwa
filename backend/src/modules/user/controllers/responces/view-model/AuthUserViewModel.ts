import { ApiProperty } from '@nestjs/swagger';
import { AuthUserData } from '@core/types';

export class AuthUserViewModel implements AuthUserData {

    @ApiProperty()
    public id: string;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public email: string;

}
