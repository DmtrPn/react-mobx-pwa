import { faker } from '@faker-js/faker/locale/ru';
import times from 'lodash/times';

faker.setLocale('ru');
faker.localeFallback = 'ru';

import { DateHelper } from './DateHelper';

export class Faker {
    public static getUuid(): string {
        return faker.datatype.uuid();
    }

    public static getUuidArray(count = 1): string[] {
        return times(count, () => this.getUuid());
    }

    public static getPositiveNumber(): number {
        return faker.datatype.number({ min: 1 });
    }

    public static getWord(): string {
        return faker.lorem.word();
    }

    public static getSentence(): string {
        return faker.lorem.sentence();
    }

    public static getEmail(): string {
        return faker.internet.email();
    }

    public static getPhone(): string {
        return faker.phone.number();
    }

    public static getBoolean(): boolean {
        return faker.datatype.boolean();
    }

    public static getDate(): string {
        return DateHelper.now().toISOString();
    }
}
