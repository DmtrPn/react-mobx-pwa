export abstract class EntityRule<E extends { authorId: string }> {

    public isOwner(user: object & { id: string }, { authorId }: E): boolean {
        return user.id === authorId;
    }

}
