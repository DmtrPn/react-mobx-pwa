import { HttpError } from './HttpError';
import { ErrorCode } from './types';

class InternalServerError extends HttpError {
    public get code(): ErrorCode {
        return ErrorCode.InternalServerError;
    }
}

export { InternalServerError };
