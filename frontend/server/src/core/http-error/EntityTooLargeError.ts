import { HttpError } from './HttpError';
import { ErrorCode } from './types';

export class EntityTooLargeError extends HttpError {
    public get code(): number {
        return ErrorCode.EntityTooLarge;
    }
}
