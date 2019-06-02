import { Stream, Writable } from 'stream';

/**
 * Wrap log function into stream. Required by morgan logging middleware
 */
export function getStream(log: (msg: string) => void): Writable {
    return new Stream.Writable({
        write(chunk, encoding, next) {
            log(chunk.toString());
            next();
        },
    });
}
