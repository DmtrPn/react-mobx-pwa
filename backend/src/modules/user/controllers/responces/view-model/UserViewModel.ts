import { ApiProperty } from '@nestjs/swagger';

import { UserStatus } from '@common/enums';
import { RoleName, EntityName } from '@core/access-control/types';

import { AuthUserViewModel } from './AuthUserViewModel';

export class UserViewModel extends AuthUserViewModel {

    @ApiProperty({ enum: UserStatus, enumName: 'UserStatus' })
    public status: UserStatus;

    @ApiProperty({ enum: RoleName, enumName: 'RoleName', isArray: true })
    public roles: RoleName[];

    @ApiProperty({ enum: EntityName, enumName: 'EntityName', isArray: true })
    public entities: EntityName[];

}
