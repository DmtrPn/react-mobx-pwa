import { Logger } from 'log4js';
import { Response } from 'express';
import { Catch, ArgumentsHost, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

import { Request } from '@core/types';
import { identifyHttpCode, HttpError as CoreHttpError } from '@core/http-error';
import { createCoreHttpError } from '@components/error-handlers';

interface Dependency {
    logger: Logger;
}

@Catch()
export class DefaultFilter extends BaseExceptionFilter {

    private logger: Logger;

    constructor({ logger }: Dependency, serverRef?: HttpServer) {
        super(serverRef);
        this.logger = logger;
    }

    public catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();
        this.log(res, req, exception);
    }

    protected log(res: Response, req: Request, error: any) {
        this.logger.error(this.getMessage(req, res));
        const coreHttpError = error instanceof CoreHttpError ? error : createCoreHttpError(error);

        let code: number;
        let data: any;

        if (coreHttpError) {
            code = identifyHttpCode(coreHttpError);
            data = coreHttpError.data;
        } else {
            code = identifyHttpCode(error);
            data = error;
        }

        if (error.response && error.response.config) {
            code = !!error.response.status ? error.response.status : code;
            data = error.response.data;
            this.logger.error(
                `${error}
Method: ${error.response.config.method}
Url: ${error.response.config.url}
Response data: ${JSON.stringify(data)}`,
            );
        } else if (error.response) {
            code = error.response.statusCode ?? error.response.status ?? code;
            data = error.response.error;
            this.logger.error(
                `${error}
statusCode: ${error.response.statusCode}
message: ${error.response.message}
error: ${error.response.error}`,
            );
        } else if (error.config) {
            code = error.code;
            this.logger.error(`Error: ${error.message}
Method: ${error.config.method}
Url: ${error.config.url}
code: ${error.code}`);
        } else {
            this.logger.error(`Error: ${error}`);
        }

        res.status(code).json(data);

        return res;
    }

    protected getMessage(req: Request, res: Response) {
        return `${this.getRequestMessage(req)} ${this.getResponseMessage(res)} requestId: ${req.get('requestId')}`;
    }

    protected getRequestMessage({ ip, method, protocol, url, hostname }: Request): string {
        return `remote-address: ${ip} ${method} ${protocol}://${hostname}${decodeURI(url)}`;
    }

    protected getResponseMessage({ statusCode }: Response) {
        return `status-code: ${statusCode}`;
    }

}
