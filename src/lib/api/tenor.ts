import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TENOR_API_KEY;
const BASE_URL = "https://tenor.googleapis.com/v2";

export async function searchGif(query: string, limit: number = 12) {
    try {
        const res = await axios.get(`${BASE_URL}/search`, {
            params: {
                q: query,
                key: API_KEY,
                limit,
            },
        });
        return res.data;
    } catch (error) {
        throw new Error("Failed to fetch gifs");
    }
}

export async function getTrendingGifs() {
    try {
        const res = await axios.get(`${BASE_URL}/featured`, {
            params: {
                q: "trending",
                key: API_KEY,
                limit: 12,
            },
        });
        return res.data;
    } catch (error) {
        throw new Error("Failed to fetch trending gifs");
    }
}