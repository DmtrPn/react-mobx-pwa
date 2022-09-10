import { ActionType, EntityName, Permission, RoleName } from '../types';

const defaultCommandPermission = {
    any: new Set<RoleName>([RoleName.Moderator]),
};

const defaultRemovePermission = {
    any: new Set<RoleName>([RoleName.Admin]),
};

const defaultViewPermission = {
    any: new Set<RoleName>([RoleName.User, RoleName.Moderator]),
};

export abstract class EntityPermission {

    public static entity: EntityName;

    protected readonly adminAccess: boolean = true;
    protected readonly moderatorAccess: boolean = false;

    protected readonly [ActionType.View]: Permission = defaultViewPermission;
    protected readonly [ActionType.Create]: Permission = defaultCommandPermission;
    protected readonly [ActionType.Edit]: Permission = defaultCommandPermission;
    protected readonly [ActionType.Remove]: Permission = defaultRemovePermission;

    public hasAnyPermission(action: ActionType, userRoles: RoleName[]): boolean {
        return this.hasAdminPermission(action, userRoles)
            || this.hasAnyAccess(action, userRoles);
    }

    public hasOwnPermission(action: ActionType, userRoles: RoleName[]): boolean {
        return this.hasAdminPermission(action, userRoles)
            || this.hasOwnAccess(action, userRoles);
    }

    public hasModeratorPermission(action: ActionType, userRoles: RoleName[]): boolean {
        const { any } = this.getPermissions(action);

        return (this.moderatorAccess || any.has(RoleName.Moderator))
            && userRoles.includes(RoleName.Moderator);
    }

    protected hasAdminPermission(action: ActionType, userRoles: RoleName[]): boolean {
        const { adminAccess = true } = this.getPermissions(action);

        return adminAccess && this.adminAccess && userRoles.includes(RoleName.Admin);
    }

    private hasAnyAccess(action: ActionType, userRoles: RoleName[]): boolean {
        const permission = this.getPermissions(action).any;
        return userRoles.some(role => permission.has(role) && role !== RoleName.Moderator);
    }

    private hasOwnAccess(action: ActionType, userRoles: RoleName[]): boolean {
        const permission = this.getPermissions(action).own;
        return !!permission && userRoles.some(role => permission.has(role));
    }

    private getPermissions(action: ActionType): Permission {
        return this[action];
    }

}
