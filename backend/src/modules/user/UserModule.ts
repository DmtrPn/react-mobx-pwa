import { Module } from '@nestjs/common';
import { UserController, AuthController } from './controllers';

@Module({
    controllers: [UserController, AuthController],
})
export class UserModule {}
