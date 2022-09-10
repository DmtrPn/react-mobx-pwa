import { Class } from 'project-types/common';

import { ICommand } from '@common/domain';

import { CreateUsersCommand } from './CreateUsersCommand';

export const commands: Class<ICommand>[] = [
    CreateUsersCommand,
];
