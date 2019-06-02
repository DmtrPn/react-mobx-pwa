import * as morgan from 'morgan';
import { Request, Response } from 'express';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Express as ExpressLogger } from '../logging';
import { getStream } from '../logging/getStream';

const NOT_WARN_LEVEL_STATUS_CODE = 400;

const logFormat = ':remote-addr - :remote-user [:date[web]] ' +
    ':method :decodUrl HTTP/:http-version" :status :res[content-length] ' +
    '":user-agent" :response-time ms';

morgan.token('decodUrl', req => decodeURIComponent(req.url));

@Middleware({ type: 'before' })
export class WarnLoggingMiddleware implements ExpressMiddlewareInterface {
    public use = morgan(logFormat, {
        skip: (req: Request, res: Response) => res.statusCode < NOT_WARN_LEVEL_STATUS_CODE,
        stream: getStream(ExpressLogger.warn.bind(ExpressLogger)),
    });
}
