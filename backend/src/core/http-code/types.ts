export enum Success {
    Ok = 200,
    Created = 201,
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export enum Error {
    InternalServerError = 500,
    UnprocessableEntity = 422,
    NotFound = 404,
    BadRequest = 400,
    Forbidden = 403,
}
