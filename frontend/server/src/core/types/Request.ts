import express from 'express';
import { Session } from './Session';

// @ts-ignore
export interface Request extends express.Request {
    id: string;
    session: Session;
    sessionID: string;
}
