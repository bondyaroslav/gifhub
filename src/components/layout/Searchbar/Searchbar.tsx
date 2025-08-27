'use client'
import React from 'react';
import {useState} from "react";
import {useGifStore} from "@/store/store";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const {search, isLoading, error} = useGifStore();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        search(query);
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="flex gap-2">
                <input
                    className="border p-2 rounded w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GIFs..."
                />
                <button type="submit" className="bg-blue-600 text-white px-4 rounded">
                    Search
                </button>
            </form>

            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Searchbar;