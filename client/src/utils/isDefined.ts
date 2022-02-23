import { isUndefined } from 'lodash';

export const isDefined = <T>(arg?: T | undefined): arg is T => !isUndefined(arg);
