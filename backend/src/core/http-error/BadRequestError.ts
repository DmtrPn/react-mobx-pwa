import { HttpError } from './HttpError';
import { ErrorCode } from './types';

class BadRequestError extends HttpError {
    public get code(): number {
        return ErrorCode.BadRequest;
    }
}

export { BadRequestError };
