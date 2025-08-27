import { create } from "zustand";
import { searchGif } from "@/lib/api/tenor";
import { getTrendingGifs } from "@/lib/api/tenor";
import { Gif } from "@/types/Gif";

type GifStore = {
    gifs: Gif[];
    isLoading: boolean;
    error: string | null;
    search: (query: string) => Promise<void>;
    fetchTrending: () => void;
    clear: () => void;
};

export const useGifStore = create<GifStore>((set) => ({
    gifs: [],
    isLoading: false,
    error: null,

    search: async (query: string) => {
        try {
            set({ isLoading: true, error: null });
            const data = await searchGif(query);
            set({ gifs: data.results, isLoading: false });
        } catch (err) {
            set({ error: "Something went wrong", isLoading: false });
        }
    },

    fetchTrending: async () => {
        try {
            set({ isLoading: true, error: null });
            const data = await getTrendingGifs();
            set({ gifs: data.results, isLoading: false });
        } catch (err) {
            set({ error: "Failed to fetch trending gifs", isLoading: false });
        }
    },

    clear: () => set({ gifs: [], error: null }),
}));
