export interface Gif {
    id: number,
    title?: string,
    url: string,
    media_formats: {
        gif: { url: string };
        tinygif: { url: string };
        nanogif: { url: string };
    };
}