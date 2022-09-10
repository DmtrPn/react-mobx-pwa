import { HttpError } from './HttpError';
import { ErrorCode } from './types';

class NotFoundError extends HttpError {
    public get code(): number {
        return ErrorCode.NotFound;
    }
}

export { NotFoundError };
