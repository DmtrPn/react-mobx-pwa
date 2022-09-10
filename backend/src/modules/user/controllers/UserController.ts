import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Inject } from 'typescript-ioc';

import { IUserCrudService } from '@user/domain/user/IUserCrudService';
import { Uuid } from '@common/controllers/validators/Uuid';

import { UserListResponse } from './responces/UserListResponse';
import { UserResponse } from './responces/UserResponse';
import { Action } from '@components/decorators/Action';
import { ActionType, EntityName } from '@core/access-control/types';

@ApiTags('Пользователя')
@Controller('user')
export class UserController {

    @Inject private crudService: IUserCrudService;

    @Get('/')
    @ApiOkResponse({ type: UserListResponse })
    public async find(): Promise<UserListResponse> {
        const users = await this.crudService.find();
        return { users };
    }

    @Action(EntityName.User, ActionType.View)
    @Get('/:id')
    @ApiOkResponse({ type: UserResponse })
    public async getUser(
        @Param() { id }: Uuid,
    ): Promise<UserResponse> {
        const user = await this.crudService.getById(id);
        return { user };
    }

}
