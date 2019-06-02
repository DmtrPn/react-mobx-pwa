import * as morgan from 'morgan';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Express as ExpressLogger } from '../logging';
import { getStream } from '../logging/getStream';

const WARN_LEVEL_STATUS_CODE = 400;

const logFormat = ':remote-addr - :remote-user [:date[web]] ' +
    ':method :decodeUrl HTTP/:http-version" :status :res[content-length] ' +
    '":user-agent" :response-time ms';

morgan.token('decodeUrl', req => decodeURIComponent(req.url));

@Middleware({ type: 'before' })
export class DebugLoggingMiddleware implements ExpressMiddlewareInterface {
    public use = morgan(logFormat, {
        skip: (req, res) => res.statusCode >= WARN_LEVEL_STATUS_CODE,
        stream: getStream(ExpressLogger.debug.bind(ExpressLogger)),
    });
}
