import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';

import { Request } from '@core/types';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
    public use(req: Request, res: Response, next: NextFunction) {
        req.id = uuid();
        next();
    }
}
