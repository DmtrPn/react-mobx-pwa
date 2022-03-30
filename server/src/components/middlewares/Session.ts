import { Injectable, NestMiddleware } from '@nestjs/common';
const expressSession = require('express-session');
import { Request as ExpressRequest, Response, NextFunction } from 'express';

import { redisSessionStore } from '@components/redis';
import { Config, ConfigName, ServerConfig } from '@core/config';

const serverConfig = <ServerConfig>Config.getConfig(ConfigName.Server);

export const sessionConfig = {
    cookie: {
        httpOnly: false,
        maxAge: null,
    },
    secret: serverConfig.cookieSecret,
    resave: false,
    saveUninitialized: true,
    store: redisSessionStore,
};

@Injectable()
export class Session implements NestMiddleware {
    private setSession = expressSession(sessionConfig);

    public use(req: ExpressRequest, res: Response, next: NextFunction) {
        this.setSession(req, res, async() => {
            if (!req.session) {
                throw new Error('Session not initialized (may be redis problem?)');
            }
            next();
        });
    }

}
