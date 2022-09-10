import { InternalServerError } from '@core/http-error';

import {
    EntityName,
    RoleName,
    ActionType,
} from './types';

import { EntityRule } from './abstract/EntityRule';
import { EntityPermission } from './abstract/EntityPermission';
import { AuthUserData } from '@core/types';

export interface CanData {
    userRoles: RoleName[];
    userEntities: EntityName[];
    entityName: EntityName;
    action: ActionType;
}

export interface CanOwnData extends Omit<CanData, 'userEntities'> {
    user: AuthUserData;
    entity: object;
}

export type Class<T extends Object, P = any> = { new (...arg: P[]): T };

export class AccessControl {

    private static instance: AccessControl;
    public static getInstance(): AccessControl {
        if (!AccessControl.instance) {
            AccessControl.instance = new AccessControl();
        }

        return AccessControl.instance;
    }

    private entitiesPermission = new Map<EntityName, EntityPermission>();
    private entitiesRule = new Map<EntityName, EntityRule<any>>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public can({
        userRoles,
        userEntities,
        entityName,
        action,
    }: CanData): boolean {
        const entityPermission = this.getEntityPermission(entityName);

        return entityPermission.hasAnyPermission(action, userRoles)
            || (userEntities.includes(entityName) && entityPermission.hasModeratorPermission(action, userRoles))
            || entityPermission.hasOwnPermission(action, userRoles);
    }

    public canOwn({
        userRoles,
        entityName,
        action,
        entity,
        user,
    }: CanOwnData): boolean {
        const entityPermission = this.getEntityPermission(entityName);
        const entityRule = this.getEntityRule(entityName);

        return entityPermission.hasOwnPermission(action, userRoles)
            && entityRule.isOwner(user, entity);
    }

    public addEntityPermission(entityName: EntityName, RuleClass: Class<EntityPermission>): void {
        if (this.entitiesPermission.has(entityName)) {
            throw new InternalServerError(`Permission for entity ${entityName} already set`);
        }

        this.entitiesPermission.set(entityName, new RuleClass());
    }

    public addEntityRule(entityName: EntityName, RuleClass: Class<EntityRule<any>>): void {
        if (this.entitiesRule.has(entityName)) {
            throw new InternalServerError(`Rule for entity ${entityName} already set`);
        }

        this.entitiesRule.set(entityName, new RuleClass());
    }

    private getEntityPermission(entityName: EntityName): EntityPermission {
        if (!this.entitiesPermission.has(entityName)) {
            throw new InternalServerError(`Permission for entity ${entityName} not found`);
        }

        return this.entitiesPermission.get(entityName);
    }

    private getEntityRule(entityName: EntityName): EntityRule<any> {
        if (!this.entitiesRule.has(entityName)) {
            throw new InternalServerError(`Rule for entity ${entityName} not found`);
        }

        return this.entitiesRule.get(entityName);
    }

}