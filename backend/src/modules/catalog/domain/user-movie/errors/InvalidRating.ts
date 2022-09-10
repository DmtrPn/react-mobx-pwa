import { BadRequestError } from '@core/http-error';

export class InvalidRating extends BadRequestError {
    constructor() {
        super('Rating must be greater than 0 and less than 10');
    }
}