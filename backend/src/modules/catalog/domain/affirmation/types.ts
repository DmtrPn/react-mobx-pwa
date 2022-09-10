import { BaseFindOptions } from '@common/domain/types';

export interface AffirmationFindOptions extends BaseFindOptions {
    text?: string;
    random?: boolean;
}

export interface AffirmationCreateData {
    id: string;
    text: string;
}

export interface AffirmationUpdateData {
    text?: string;
}
