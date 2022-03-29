import { HttpError } from 'routing-controllers';
import { HttpError as CoreHttpError } from '../HttpError';
import { BodyParserError, HttpCode } from './types';

export const identifyHttpCode = (error: unknown): number => {
    let code = HttpCode.InternalServer;

    if (error instanceof HttpError) {
        code = error.httpCode;
    } else if (error instanceof CoreHttpError) {
        code = error.code;
    } else if (undefined !== ((error as any) as BodyParserError).status) {
        code = ((error as any) as BodyParserError).status;
    }

    return code;
};
