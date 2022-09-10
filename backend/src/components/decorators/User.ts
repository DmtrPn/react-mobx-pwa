import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Optional } from 'project-types/common';
import { AuthUserViewModel } from '@user/controllers/responces/view-model/AuthUserViewModel';

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): Optional<AuthUserViewModel> => {
        const request = ctx.switchToHttp().getRequest();

        return request.session.passport?.user;
    },
);
