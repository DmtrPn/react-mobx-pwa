import isUndefined from 'lodash/isUndefined';

import { HttpError as CoreHttpError } from '../HttpError';
import { BodyParserError, HttpCode } from './types';

export const identifyHttpCode = (error: unknown): number => {
    let code = HttpCode.InternalServer;

    if (error instanceof CoreHttpError) {
        code = error.code;
    } else if (!isUndefined(((error as any) as BodyParserError).status)) {
        code = ((error as any) as BodyParserError).status;
    } else if (!isUndefined(error as any).statusCode) {
        code = (error as any).statusCode;
    }

    return code;
};
