import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

import { IS_PUBLIC_KEY, IsPublicMetadata } from '@components/decorators/Pubic';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    private reflector = new Reflector();

    constructor() {
        super({ session: true });
    }

    public canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const isPublic = this.reflector.getAllAndOverride<IsPublicMetadata>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        return isPublic || request.isAuthenticated();
    }

}
