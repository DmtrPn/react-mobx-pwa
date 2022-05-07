import { Class } from 'dobro-types/common';

import { InternalServerError } from '@core/http-error';

import {
    EntityName,
    RoleName,
    ActionType,
} from './types';
import { Rule } from './Rule';

export class AccessControl {

    private static instance: AccessControl;
    public static getInstance(): AccessControl {
        if (!AccessControl.instance) {
            AccessControl.instance = new AccessControl();
        }

        return AccessControl.instance;
    }

    private rules: Map<EntityName, Rule>;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public can(userRoles: RoleName[], entity: EntityName, action: ActionType): boolean {
        const entityRules = this.getEntityRule(entity);

        return entityRules.checkPermission(action, userRoles);
    }

    public addRule(entityName: EntityName, RuleClass: Class<Rule>): void {
        if (this.rules.has(entityName)) {
            throw new InternalServerError(`Rule for entityt ${entityName} already set`);
        }

        this.rules.set(entityName, new RuleClass());
    }

    private getEntityRule(entityName: EntityName): Rule {
        if (!this.rules.has(entityName)) {
            throw new InternalServerError(`Rule for entity ${entityName} not found`);
        }

        return this.rules.get(entityName);
    }

}