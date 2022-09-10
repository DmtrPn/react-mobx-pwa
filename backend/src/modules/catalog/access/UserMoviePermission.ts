import { EntityPermission } from '@core/access-control/abstract/EntityPermission';
import { ActionType, EntityName, Permission, RoleName } from '@core/access-control/types';

export class UserMoviePermission extends EntityPermission {

    protected readonly adminAccess = false;

    protected readonly [ActionType.View]: Permission = {
        any: new Set<RoleName>([RoleName.User]),
    };

    protected readonly [ActionType.Create]: Permission = {
        any: new Set<RoleName>([RoleName.User]),
    };

    protected readonly [ActionType.Edit]: Permission = {
        any: new Set<RoleName>([RoleName.User]),
    };

    protected readonly [ActionType.Remove]: Permission = {
        any: new Set<RoleName>([RoleName.User]),
    };

    public static get entity(): EntityName {
        return EntityName.UserMovie;
    }

}
