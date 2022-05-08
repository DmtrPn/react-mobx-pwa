import { ActionType, EntityName, Permission, RoleName } from '../types';

const defaultCommandPermission = {
    any: new Set<RoleName>([RoleName.Moderator]),
};

const defaultRemovePermission = {
    any: new Set<RoleName>([RoleName.Admin]),
};

const defaultViewPermission = {
    any: new Set<RoleName>([RoleName.User]),
};

export abstract class EntityPermission {

    public static entity: EntityName;

    protected adminAccess = true;
    protected moderatorAccess = false;

    protected [ActionType.View]: Permission = defaultViewPermission;
    protected [ActionType.Create]: Permission = defaultCommandPermission;
    protected [ActionType.Edit]: Permission = defaultCommandPermission;
    protected [ActionType.Remove]: Permission = defaultRemovePermission;

    public hasAnyPermission(action: ActionType, userRoles: RoleName[]): boolean {
        return this.hasAdminPermission(action, userRoles)
            || this.hasModeratorPermission(action, userRoles)
            || this.hasAnyAccess(action, userRoles);
    }

    public hasOwnPermission(action: ActionType, userRoles: RoleName[]): boolean {
        return this.hasAdminPermission(action, userRoles)
            || this.hasModeratorPermission(action, userRoles)
            || this.hasOwnAccess(action, userRoles);
    }

    protected hasAdminPermission(action: ActionType, userRoles: RoleName[]): boolean {
        const { adminAccess = true } = this.getPermissions(action);

        return adminAccess && this.adminAccess && userRoles.includes(RoleName.Admin);
    }

    protected hasModeratorPermission(action: ActionType, userRoles: RoleName[]): boolean {
        const { moderatorAccess = this.moderatorAccess } = this.getPermissions(action);

        return moderatorAccess && this.moderatorAccess && userRoles.includes(RoleName.Moderator);
    }

    private hasAnyAccess(action: ActionType, userRoles: RoleName[]): boolean {
        const permission = this.getPermissions(action).any;
        return userRoles.some(role => permission.has(role));
    }

    private hasOwnAccess(action: ActionType, userRoles: RoleName[]): boolean {
        const permission = this.getPermissions(action).own;
        return !!permission && userRoles.some(role => permission.has(role));
    }

    private getPermissions(action: ActionType): Permission {
        return this[action];
    }

}
