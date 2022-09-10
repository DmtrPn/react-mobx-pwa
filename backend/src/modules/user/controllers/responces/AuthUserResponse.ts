import { ApiResponseProperty } from '@nestjs/swagger';

import { AuthUserViewModel } from './view-model/AuthUserViewModel';

export class AuthUserResponse {

    @ApiResponseProperty({ type: AuthUserViewModel })
    public user: AuthUserViewModel;

}
