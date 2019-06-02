import { HttpError, ErrorData } from './HttpError';
import { ErrorCode } from './types';

type ValidationErrorItems = { [property: string]: string[] };

interface ValidationErrorData extends ErrorData {
    validationErrors: ValidationErrorItems;
}

class ValidationError extends HttpError {
    protected validationErrors_: ValidationErrorItems;

    constructor(validationErrors: ValidationErrorItems) {
        super();
        this.validationErrors_ = validationErrors;
    }

    public get code(): ErrorCode {
        return ErrorCode.UnprocessableEntity;
    }

    protected get errorCode(): string {
        return 'Validation';
    }

    public get data(): ValidationErrorData {
        return {
            ...super.data,
            validationErrors: this.validationErrors,
        };
    }

    protected get validationErrors(): ValidationErrorItems {
        return this.validationErrors_;
    }
}

export { ValidationError, ValidationErrorData, ValidationErrorItems };
