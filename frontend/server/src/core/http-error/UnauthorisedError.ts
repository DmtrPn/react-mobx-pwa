import { HttpError } from './HttpError';
import { ErrorCode } from './types';

class UnauthorisedError extends HttpError {
    public get code(): ErrorCode {
        return ErrorCode.Unauthorized;
    }
}

export { UnauthorisedError };
