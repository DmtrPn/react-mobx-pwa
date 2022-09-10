import { SetMetadata } from '@nestjs/common';
import { ActionType, EntityName } from '@core/access-control/types';

export interface ActionMetadata {
    entityName: EntityName;
    action: ActionType;
}

export const ACTION_KEY = 'action';
export const Action = (entityName: EntityName, action: ActionType) =>
    SetMetadata<'action', ActionMetadata>(ACTION_KEY, { action, entityName });
