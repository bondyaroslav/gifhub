import {create} from "zustand";
import {searchGif, getTrendingGifs} from "@/lib/api/tenor";
import {Gif} from "@/types/Gif";

type GifStore = {
    gifs: Gif[];
    isLoading: boolean;
    error: string | null;
    next: string | null;
    hasMore: boolean;
    currentQuery: string | null;
    search: (query: string) => Promise<void>;
    fetchMoreSearch: () => Promise<void>;
    fetchTrending: () => Promise<void>;
    fetchMoreTrending: () => Promise<void>;
    clear: () => void;
};

export const useGifStore = create<GifStore>((set, get) => ({
    gifs: [],
    isLoading: false,
    error: null,
    next: null,
    hasMore: true,
    currentQuery: null,

    search: async (query: string) => {
        try {
            set({isLoading: true, error: null, currentQuery: query});
            const data = await searchGif(query);
            set({
                gifs: data.results,
                next: data.next || null,
                hasMore: Boolean(data.next),
                isLoading: false,
            });
        } catch {
            set({error: "Search failed", isLoading: false});
        }
    },

    fetchMoreSearch: async () => {
        const {next, gifs, hasMore, currentQuery} = get();
        if (!hasMore || !next || !currentQuery) return;

        set({isLoading: true});
        try {
            const data = await searchGif(currentQuery, next);
            set({
                gifs: [...gifs, ...data.results],
                next: data.next || null,
                hasMore: Boolean(data.next),
                isLoading: false,
            });
        } catch {
            set({error: "Failed to load more search results", isLoading: false});
        }
    },

    fetchTrending: async () => {
        try {
            set({isLoading: true, error: null, currentQuery: null});
            const data = await getTrendingGifs();
            set({
                gifs: data.results,
                next: data.next || null,
                hasMore: Boolean(data.next),
                isLoading: false,
            });
        } catch {
            set({error: "Failed to fetch trending", isLoading: false});
        }
    },

    fetchMoreTrending: async () => {
        const {next, gifs, hasMore} = get();
        if (!hasMore || !next) return;

        set({isLoading: true});
        try {
            const data = await getTrendingGifs(next);
            set({
                gifs: [...gifs, ...data.results],
                next: data.next || null,
                hasMore: Boolean(data.next),
                isLoading: false,
            });
        } catch {
            set({error: "Failed to load more trending", isLoading: false});
        }
    },

    clear: () => set({gifs: [], error: null, next: null, hasMore: true, currentQuery: null}),
}));
