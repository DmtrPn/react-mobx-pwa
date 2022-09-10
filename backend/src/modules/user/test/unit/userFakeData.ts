import { Attributes } from 'project-types/common';

import { FakeParams } from '@core/test/FakeParams';

import { UserStatus } from '@common/enums';
import { UserModel } from '@user/infrastructure/user/UserModel';
import { EntityName, RoleName } from '@core/access-control/types';

export const getSimpleUser = (): Attributes<UserModel> => {
    return {
        id: FakeParams.getId(),
        name: FakeParams.getName(),
        email: FakeParams.getEmail(),
        status: UserStatus.Active,
        roles: [RoleName.User],
        entities: [],
    };
};

export const getAdminUser = (): Attributes<UserModel> => {
    return {
        id: FakeParams.getId(),
        name: FakeParams.getName(),
        email: FakeParams.getEmail(),
        status: UserStatus.Active,
        roles: [RoleName.Admin],
        entities: [],
    };
};

export const getEntityModeratorUser = (entityName?: EntityName): Attributes<UserModel> => {
    return {
        id: FakeParams.getId(),
        name: FakeParams.getName(),
        email: FakeParams.getEmail(),
        status: UserStatus.Active,
        roles: [RoleName.Moderator],
        entities: !!entityName ? [entityName] : [],
    };
};
