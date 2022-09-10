import { AccessControl } from '@core/access-control/AccessControl';
import { ActionType, EntityName, RoleName } from '@core/access-control/types';

export abstract class EntityAccessControlTest {

    protected abstract entityName: EntityName;
    protected abstract adminUser: object & { roles: RoleName[]; entities: EntityName[] };
    protected abstract simpleUser: object & { roles: RoleName[]; entities: EntityName[] };
    protected abstract otherEntityModerator: object & { roles: RoleName[]; entities: EntityName[] };
    protected abstract entityModerator: object & { roles: RoleName[]; entities: EntityName[] };

    private accessControl = AccessControl.getInstance();

    public abstract checkSimpleUserCanViewEntity(): void;
    public abstract checkSimpleUserCanCreateEntity(): void;
    public abstract checkSimpleUserCanEditEntity(): void;
    public abstract checkSimpleUserCanRemoveEntity(): void;
    public abstract checkAdminCanViewEntity(): void;
    public abstract checkAdminCanCreateEntity(): void;
    public abstract checkAdminCanEditEntity(): void;
    public abstract checkAdminCanRemoveEntity(): void;
    public abstract checkEntityModeratorCanViewEntity(): void;
    public abstract checkEntityModeratorCanCreateEntity(): void;
    public abstract checkEntityModeratorCanEditEntity(): void;
    public abstract checkEntityModeratorCanRemoveEntity(): void;
    public abstract checkOtherEntityModeratorCanViewEntity(): void;
    public abstract checkOtherEntityModeratorCanCreateEntity(): void;
    public abstract checkOtherEntityModeratorCanEditEntity(): void;
    public abstract checkOtherEntityModeratorCanRemoveEntity(): void;

    protected canSimpleUserCanViewEntity(): boolean {
        return this.can(this.simpleUser, ActionType.View);
    }

    protected canSimpleUserCanCreateEntity(): boolean {
        return this.can(this.simpleUser, ActionType.Create);
    }

    protected canSimpleUserCanEditEntity(): boolean {
        return this.can(this.simpleUser, ActionType.Edit);
    }

    protected canSimpleUserCanRemoveEntity(): boolean {
        return this.can(this.simpleUser, ActionType.Remove);
    }

    protected canAdminCanViewEntity(): boolean {
        return this.can(this.adminUser, ActionType.View);
    }

    protected canAdminCanCreateEntity(): boolean {
        return this.can(this.adminUser, ActionType.Create);
    }

    protected canAdminCanEditEntity(): boolean {
        return this.can(this.adminUser, ActionType.Edit);
    }

    protected canAdminCanRemoveEntity(): boolean {
        return this.can(this.adminUser, ActionType.Remove);
    }

    protected canEntityModeratorCanViewEntity(): boolean {
        return this.can(this.entityModerator, ActionType.View);
    }

    protected canEntityModeratorCanCreateEntity(): boolean {
        return this.can(this.entityModerator, ActionType.Create);
    }

    protected canEntityModeratorCanEditEntity(): boolean {
        return this.can(this.entityModerator, ActionType.Edit);
    }

    protected canEntityModeratorCanRemoveEntity(): boolean {
        return this.can(this.entityModerator, ActionType.Remove);
    }

    protected canOtherEntityModeratorCanViewEntity(): boolean {
        return this.can(this.otherEntityModerator, ActionType.View);
    }

    protected canOtherEntityModeratorCanCreateEntity(): boolean {
        return this.can(this.otherEntityModerator, ActionType.Create);
    }

    protected canOtherEntityModeratorCanEditEntity(): boolean {
        return this.can(this.otherEntityModerator, ActionType.Edit);
    }

    protected canOtherEntityModeratorCanRemoveEntity(): boolean {
        return this.can(this.otherEntityModerator, ActionType.Remove);
    }

    protected can({ roles, entities }: object & { roles: RoleName[]; entities: EntityName[] }, action: ActionType): boolean {
        return this.accessControl.can({
            action,
            entityName: this.entityName,
            userEntities: entities,
            userRoles: roles,
        });
    }
}
