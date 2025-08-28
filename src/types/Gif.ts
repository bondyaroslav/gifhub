export interface GifFormat {
    url: string;
    dims: [number, number];
    size?: number;
}

export interface Gif {
    id: string;
    title?: string;
    content_description: string;
    url?: string;
    media_formats: {
        gif: GifFormat;
        tinygif?: GifFormat;
        nanogif?: GifFormat;
    };
}
