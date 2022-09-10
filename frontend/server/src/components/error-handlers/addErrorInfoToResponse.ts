import {
    HttpError as CoreHttpError,
    ForbiddenError,
    InternalServerError,
    identifyHttpCode,
    HttpCode,
    BodyParserError,
    EntityTooLargeError,
    NotFoundError,
    BadRequestError,
} from '@core/http-error';

export function createCoreHttpError(error: unknown): CoreHttpError | null {
    let result = null;
    const code = identifyHttpCode(error);

    switch (code) {
        case HttpCode.BadRequest:
            result = new BadRequestError((error as Error)?.message);
            break;

        case HttpCode.NotFound:
            result = new NotFoundError((error as Error)?.message);
            break;

        case HttpCode.Forbidden:
            result = new ForbiddenError((error as Error)?.message);
            break;

        case HttpCode.InternalServer:
            result = new InternalServerError((error as Error)?.message);
            break;

        case HttpCode.EntityTooLarge:
            const bodyParserError = (error as any) as BodyParserError;

            if (undefined !== bodyParserError.limit && undefined !== bodyParserError.length) {
                result = new EntityTooLargeError(
                    `${(error as Error)?.message} (request ${bodyParserError.length}, limit ${bodyParserError.limit})`,
                );
            } else {
                result = new EntityTooLargeError((error as Error)?.message);
            }
            break;
    }

    return result;
}
