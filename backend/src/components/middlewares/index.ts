import { RequestIdMiddleware } from './RequestIdMiddleware';
import { Session } from './Session';

const middlewares = [
    RequestIdMiddleware,
    Session,
];

export { middlewares };
