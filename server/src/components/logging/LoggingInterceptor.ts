import { Logger } from 'log4js';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExecutionContext, CallHandler } from '@nestjs/common';

const IS_PROD = ['prod', 'production'].includes(process.env.CURRENT_ENV);

export class LoggingInterceptor {

    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const startTime = Date.now();

        const [{ body }] = context.getArgs();
        const message = this.getLogMessage(context);
        const additionalMessage = this.getAdditionalMessage(context);
        let requestBody = '';

        try {
            requestBody = JSON.stringify(body);
        } catch (e) {
            console.error('Cant stringify body:', body);
            console.error('Error:', e);
        }

        const complete = (responseData: any) => {
            const statusCode = context.switchToHttp().getResponse().statusCode;
            if (IS_PROD) {
                this.logger.info(`${message} ${statusCode} ${additionalMessage} ${Date.now() - startTime}`);
            } else {
                // tslint:disable-next-line:max-line-length
                this.logger.info(`${message} statusCode: ${statusCode} ${additionalMessage} time: ${Date.now() - startTime} ms`);
            }
            this.logger.debug(`Request-body: ${requestBody}`);
            this.logger.debug(`Response-body: ${JSON.stringify(responseData)}`);
        };

        return next
            .handle()
            .pipe(tap(complete));
    }

    protected getLogMessage(context: ExecutionContext): string {
        const [{ url, method, connection: { remoteAddress } }] = context.getArgs();
        return `${remoteAddress} ${method} ${decodeURI(url)}`;
    }

    protected getAdditionalMessage(context: ExecutionContext): string {
        const [{ headers }] = context.getArgs();
        const request = context.switchToHttp().getRequest();

        const controllerName = context.getClass().name;
        const methodName = context.getHandler().name;
        const action = `${controllerName}.${methodName}`;

        return IS_PROD
            ? `${request.id} ${action}`
            : `userAgent: ${headers['user-agent']} requestId: ${request.id} action: ${action}`;
    }
}
