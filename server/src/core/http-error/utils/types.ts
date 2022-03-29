export type BodyParserError = {
    status: number;
    type:
        | 'entity.too.large'
        | 'encoding.unsupported'
        | 'request.aborted'
        | 'request.size.invalid'
        | 'stream.encoding.set'
        | 'parameters.too.many'
        | 'charset.unsupported'
        | 'encoding.unsupported';
    limit?: number;
    expected?: number;
    length?: number;
};

export enum HttpCode {
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    EntityTooLarge = 413,
    InternalServer = 500,
}
