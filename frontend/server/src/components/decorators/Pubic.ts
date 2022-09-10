import { SetMetadata } from '@nestjs/common';

export type IsPublicMetadata = boolean;

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () =>
    SetMetadata<'isPublic', IsPublicMetadata>(IS_PUBLIC_KEY, true);
