import { HttpError } from './HttpError';
import { ErrorCode } from './types';

export class FailedDependencyError extends HttpError {
    public get code() {
        return ErrorCode.FailedDependency;
    }
}
