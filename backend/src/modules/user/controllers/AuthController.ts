import { Controller, Get, Post, Put, Req, Res, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Inject } from 'typescript-ioc';

import { LoginForm } from 'project-types/backend';

import { Public } from '@components/decorators';
import { LoginUserCommand } from '@user/use-cases/auth';
import { IUserCrudService } from '@user/domain/user/IUserCrudService';

import { AuthUserResponse } from './responces/AuthUserResponse';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    @Inject private userCrudService: IUserCrudService;

    @Public()
    @ApiOkResponse({ type: AuthUserResponse })
    @Post('/login')
    public async login(
        @Req() request,
        @Res() response,
        @Body() { user: loginData }: LoginForm,
    ): Promise<AuthUserResponse | any> {
        await new LoginUserCommand(loginData).execute();

        const { password, roles, entities, ...user } = await this.userCrudService.getByEmail(loginData.email);

        request.login(user, (err, req_) => err
            ? response.status(401).send('<h1>Login Failure</h1>')
            : response.status(200).send({ user }));
    }

    @Public()
    @ApiOkResponse({ type: AuthUserResponse })
    @Get('/user')
    public async getAuthorizedUser(
        @Req() req,
    ): Promise<AuthUserResponse> {
        return { user: req.user };
    }

    @Public()
    @Put('/logout')
    public async logout(
        @Req() req,
        @Res() res,
    ): Promise<any> {
        req.session.destroy();
        req.logout();
        res.redirect('/');
    }

}
