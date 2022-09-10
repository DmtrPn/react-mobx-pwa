export interface AffirmationCreateForm {
    affirmation: AffirmationCreateParams;
}
export interface AffirmationCreateParams {
    id: string; // uuid
    text: string;
}
export interface AffirmationListResponse {
    readonly affirmations: AffirmationViewModel[];
}
export interface AffirmationUpdateForm {
    affirmation: AffirmationUpdateParams;
}
export interface AffirmationUpdateParams {
    text?: string;
}
export interface AffirmationViewModel {
    id: string;
    text: string;
}
export interface AuthUserResponse {
    readonly user: {
        id: string;
        name: string;
        email: string;
    };
}
export interface AuthUserViewModel {
    id: string;
    name: string;
    email: string;
}
export type EntityName = "movie" | "userMovie" | "affirmation" | "user";
export interface MovieCreateForm {
    movie: MovieCreateParams;
}
export interface MovieCreateParams {
    id: string; // uuid
    name: string;
    link: string;
    description?: string;
}
export interface MovieListResponse {
    readonly movies: MovieViewModel[];
}
export interface MovieResponse {
    readonly movie: {
        id: string;
        status: MovieStatus;
        link: string;
        name: string;
        description?: string;
        authorId: string;
        rating: number;
    };
}
export type MovieStatus = "new" | "rejected";
export interface MovieUpdateForm {
    movie: MovieUpdateParams;
}
export interface MovieUpdateParams {
    name?: string;
    link?: string;
    description?: string;
    status?: "new" | "rejected";
}
export interface MovieViewModel {
    id: string;
    status: MovieStatus;
    link: string;
    name: string;
    description?: string;
    authorId: string;
    rating: number;
}
declare namespace Parameters {
    export type Id = string;
}
export interface PathParameters {
    id: Parameters.Id;
}
export type RequestBody = UserMovieUpdateForm;
declare namespace Responses {
    export type $200 = AuthUserResponse;
}
export type RoleName = "admin" | "moderator" | "user";
export interface UserListResponse {
    readonly users: UserViewModel[];
}
export interface UserMovieModel {
    movieId: string;
    userId: string;
    rating?: number;
    isViewed: boolean;
    comment?: string;
}
export interface UserMovieUpdateForm {
    userMovie: UserMovieUpdateParams;
}
export interface UserMovieUpdateParams {
    movieId: string;
    userId: string;
    rating?: number;
    isViewed?: boolean;
    comment?: string;
}
export interface UserMoviesResponse {
    readonly userMovies: UserMovieModel[];
}
export interface UserResponse {
    readonly user: {
        id: string;
        name: string;
        email: string;
        status: UserStatus;
        roles: RoleName[];
        entities: EntityName[];
    };
}
export type UserStatus = "active" | "archive";
export interface UserViewModel {
    id: string;
    name: string;
    email: string;
    status: UserStatus;
    roles: RoleName[];
    entities: EntityName[];
}
