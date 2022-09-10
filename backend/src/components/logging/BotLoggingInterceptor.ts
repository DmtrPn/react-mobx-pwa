import { Logger } from 'log4js';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExecutionContext, CallHandler } from '@nestjs/common';

// const IS_PROD = ['prod', 'production'].includes(process.env.CURRENT_ENV);

export class BotLoggingInterceptor {

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
            this.logger.info(`${message} ${additionalMessage} time: ${Date.now() - startTime} ms`);
            this.logger.debug(`Request-body: ${requestBody}`);
            this.logger.debug(`Response-body: ${JSON.stringify(responseData)}`);
        };

        return next
            .handle()
            .pipe(tap(complete));
    }

    protected getLogMessage(context: ExecutionContext): string {
        const [{ update }] = context.getArgs();

        const message = update?.message ?? update?.callback_query?.message;

        return !!message
            ? `From ${message.from.username}`
            : '-';
    }

    protected getAdditionalMessage(context: ExecutionContext): string {
        const { update } = context.switchToHttp().getRequest();

        const controllerName = context.getClass().name;
        const methodName = context.getHandler().name;
        const action = `${controllerName}.${methodName}`;

        return `data: ${update.callback_query?.data ?? update.message?.text ?? '-'} action: ${action}`;
    }
}
