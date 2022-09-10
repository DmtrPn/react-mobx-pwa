import { AuthUserData } from './index';

export interface Session {
    passport?: {
        user: AuthUserData;
    };
}
