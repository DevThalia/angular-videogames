// game.model.ts
export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    description: string;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Array<{
        id: number;
        title: string;
        count: number;
        percent: number;
    }>;
}
