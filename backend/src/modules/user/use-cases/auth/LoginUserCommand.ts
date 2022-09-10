import { Inject } from 'typescript-ioc';
import { checkPassword } from 'password-crygen';

import { UseCaseCommand } from '@common/use-cases/UseCaseCommand';
import { IUserCrudService } from '@user/domain/user/IUserCrudService';
import { UserModel } from '@user/infrastructure/user/UserModel';
import { ConflictError, NotFoundError } from '@core/http-error';

interface Params {
    email: string;
    password: string;
}

class LoginUserCommand extends UseCaseCommand<Params> {

    @Inject private userCrudService: IUserCrudService;

    public async execute(): Promise<void> {
        const { email, password } = this.params;
        const user = await this.getByEmailOrFail(email);

        if (!user.password) {
            throw new ConflictError('Password does not set');
        }

        if (!checkPassword(password, user.password)) {
            throw new ConflictError('Неверный пароль');
        }
    }

    private async getByEmailOrFail(email: string): Promise<UserModel> {
        const user = await this.userCrudService.getByEmail(email);

        if (!user) {
            throw new NotFoundError(`Пользователь с email ${email} не найден`);
        }

        return user;
    }

}

export {
    LoginUserCommand,
};
