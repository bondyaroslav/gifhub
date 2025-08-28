'use client'
import React from 'react';
import {useState} from "react";
import {useGifStore} from "@/store/store";
import {SearchForm, SearchInput, SearchButton} from "./Searchbar.styles";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const {search} = useGifStore();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        search(query);
    };

    return (
        <div>
            <SearchForm onSubmit={handleSearch}>
                <SearchInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GIFs..."
                />
                <SearchButton type="submit" className="bg-blue-600 text-white px-4 rounded">
                    Search
                </SearchButton>
            </SearchForm>
        </div>
    );
};

export default Searchbar;