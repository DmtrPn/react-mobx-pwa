import { ApiResponseProperty } from '@nestjs/swagger';

import { UserViewModel } from './view-model/UserViewModel';

export class UserResponse {

    @ApiResponseProperty({ type: UserViewModel })
    public user: UserViewModel;

}
