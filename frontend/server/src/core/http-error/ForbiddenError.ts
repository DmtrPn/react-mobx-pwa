import { HttpError } from './HttpError';
import { ErrorCode } from './types';

export class ForbiddenError extends HttpError {
    public get code(): number {
        return ErrorCode.Forbidden;
    }
}
