import { AccessControl } from '@core/access-control/AccessControl';

import { UseCaseCommand } from './UseCaseCommand';

export abstract class AccessControlUseCaseCommand<T extends object> extends UseCaseCommand<T> {

    protected accessControl: AccessControl = AccessControl.getInstance();

}