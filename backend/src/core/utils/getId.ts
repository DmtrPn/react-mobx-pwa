// import { v4 as uuid } from 'uuid';
// @ts-ignore
import uuid from 'uuid-browser/v4';

export function getId(): string {
    return uuid();
}
