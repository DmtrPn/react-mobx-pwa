interface ErrorData {
    code: string;
    message?: string;
}

const ERROR = 'Error';

abstract class HttpError extends Error {
    public abstract get code(): number;

    public get data(): ErrorData {
        return {
            code: this.errorCode,
            message: this.message,
        };
    }

    protected get errorCode(): string {
        let code: string = this.constructor.name;
        if (code.endsWith(ERROR)) {
            code = code.replace(ERROR, '');
        }
        return code;
    }
}

export { HttpError, ErrorData };
