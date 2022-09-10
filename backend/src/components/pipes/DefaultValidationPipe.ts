import { isString } from 'lodash';
import { ValidationPipe, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ValidationError } from '@core/http-error';

// import { ValidationError as ChaikaValidationError } from 'chaika-http-errors';

export class DefaultValidationPipe extends ValidationPipe {

    public async transform(value, metadata: ArgumentMetadata) {
        try {
            const result = await super.transform(value, metadata);

            return result;
        } catch (e) {
            if (e instanceof BadRequestException) {
                const data = e.getResponse();

                const message = isString(data)
                    ? data
                    : (data as unknown as { message: string [] }).message.join(', ');

                throw new ValidationError(message as string);
            }
        }
    }

}
