import { Request } from './Request';
import { Session } from './Session';

export { Request, Session };

export interface AuthUserData {
    id: string;
    name: string;
    email: string;
}
