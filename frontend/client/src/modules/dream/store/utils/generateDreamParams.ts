import { DreamParams } from '../DreamStore';
import { Faker } from '@utils/Faker';

export function generateDreamParams(params: Partial<DreamParams> = {}): DreamParams {
    return {
        id: Faker.getPositiveNumber(),
        name: Faker.getWord(),
        ...params,
    };
}
