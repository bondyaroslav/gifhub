import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TENOR_API_KEY;
const BASE_URL = "https://tenor.googleapis.com/v2";

export async function searchGif(query: string, pos?: string, limit: number = 12) {
    try {
        const res = await axios.get(`${BASE_URL}/search`, {
            params: {
                q: query,
                key: API_KEY,
                limit,
                pos
            },
        });
        return res.data;
    } catch (error) {
        console.error("searchGif failed:", error);
        throw new Error("Failed to fetch gifs");
    }
}

export async function getTrendingGifs(pos?: string, limit: number = 12) {
    try {
        const res = await axios.get(`${BASE_URL}/featured`, {
            params: {
                q: "trending",
                key: API_KEY,
                limit,
                pos
            },
        });
        return res.data;
    } catch (error) {
        console.error("getTrendingGifs failed:", error);
        throw new Error("Failed to fetch trending gifs");
    }
}