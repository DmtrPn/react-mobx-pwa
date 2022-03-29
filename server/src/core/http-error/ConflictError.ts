import { HttpError } from './HttpError';
import { ErrorCode } from './types';

export class ConflictError extends HttpError {
    public get code(): number {
        return ErrorCode.Conflict;
    }
}
