export interface UserMovieFindOptions {
    movieId?: string;
    userId?: string;
}

export interface UserMovieDto {
    movieId: string;
    userId: string;
    rating?: number;
    isViewed: boolean;
    comment?: string;
}

export interface UserMovieCreateData {
    movieId: string;
    userId: string;
    rating?: number;
    isViewed?: boolean;
    comment?: string;

}

export interface UserMovieUpdateData {
    rating?: number;
    isViewed?: boolean;
    comment?: string;
}
