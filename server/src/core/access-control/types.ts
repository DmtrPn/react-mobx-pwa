export enum RoleName {
    Admin = 'admin',
    Moderator = 'moderator',
    User = 'user',
}

export enum EntityName {
    Dream = 'dream',
    Wish = 'wish',
}

export enum ActionType {
    View = 'view',
    Create = 'create',
    Edit = 'edit',
    Remove = 'remove',
}

export type EntityPermission = {
    any?: Set<RoleName>;
    own?: Set<RoleName>;
};
