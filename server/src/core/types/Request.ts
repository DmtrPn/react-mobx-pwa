import * as express from 'express';
import { Session } from './Session';

export interface Request extends express.Request {
    session: Session;
    sessionID: string;
}
