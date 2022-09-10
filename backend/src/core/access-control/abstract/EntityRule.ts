import { AuthUserData } from '@core/types';

export abstract class EntityRule<E extends { authorId: string }> {

    public isOwner(user: AuthUserData, { authorId }: E): boolean {
        return user.id === authorId;
    }

}
