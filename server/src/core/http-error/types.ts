export enum ErrorCode {
    InternalServerError = 500,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    UnprocessableEntity = 422,
    Conflict = 409,
    EntityTooLarge = 413,
    FailedDependency = 424,
}
