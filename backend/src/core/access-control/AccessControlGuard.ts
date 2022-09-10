import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Inject } from 'typescript-ioc';

import { Optional } from 'project-types/common';

import { ACTION_KEY, ActionMetadata } from '@components/decorators/Action';
import { IS_PUBLIC_KEY, IsPublicMetadata } from '@components/decorators/Pubic';
import { AccessControl } from '@core/access-control/AccessControl';
import { ForbiddenError } from '@core/http-error';
import { UserModel } from '@user/infrastructure/user/UserModel';
import { IUserCrudService } from '@user/domain/user/IUserCrudService';

@Injectable()
export class AccessControlGuard implements CanActivate {

    @Inject private userCrudService: IUserCrudService;

    private accessControl = AccessControl.getInstance();
    private reflector = new Reflector();

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<IsPublicMetadata>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const action = this.reflector.getAllAndOverride<ActionMetadata>(ACTION_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        if (!action) {
            throw new ForbiddenError('Action does not set');
        }

        const user = await this.getUser(context);

        return !!user && this.accessControl.can({
            userRoles: user.roles,
            userEntities: user.entities,
            ...action,
        });
    }

    private async getUser(ctx: ExecutionContext): Promise<Optional<UserModel>> {
        const request = ctx.switchToHttp().getRequest();

        const user = request.session.passport?.user;

        return !!user ? this.userCrudService.getById(user.id) : undefined;
    }
}