"use client";
import React, {useState} from "react";
import {useGifStore} from "@/store/store";
import {SearchForm, SearchInput, SearchButton} from "./Searchbar.styles";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const {search} = useGifStore();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        search(query.trim());
    };

    return (
        <SearchForm onSubmit={handleSearch}>
            <SearchInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GIFs..."
            />
            <SearchButton type="submit">
                Search
            </SearchButton>
        </SearchForm>
    );
};

export default Searchbar;
