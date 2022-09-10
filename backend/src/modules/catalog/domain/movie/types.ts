import { MovieStatus } from '@components/common/enums';

import { BaseFindOptions } from '@common/domain/types';

export interface MovieFindOptions extends BaseFindOptions {
    name?: string;
}

export interface MovieCreateData {
    id: string;
    link: string;
    name: string;
    authorId: string;
    description?: string;
}

export interface MovieUpdateData {
    link?: string;
    name?: string;
    description?: string;
    status?: MovieStatus;
}

export interface MovieData {
    id: string;
    link: string;
    name: string;
    authorId: string;
    description?: string;
    rating: number;
    status: MovieStatus;
}
