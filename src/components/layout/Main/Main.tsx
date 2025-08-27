'use client'
import React, {useEffect} from 'react';
import Searchbar from "@/components/layout/Searchbar/Searchbar";
import Card from "@/components/Card/Card";
import {Gif} from "@/types/Gif";
import {useGifStore} from "@/store/store";

const Main = () => {
    const {gifs, fetchTrending, isLoading, error} = useGifStore();

    useEffect(() => {
        fetchTrending()
    }, [fetchTrending])

    return (
        <main>
            <Searchbar/>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {gifs.map((gif: Gif) => (
                    <Card key={gif.id} gif={gif}/>
                ))}
            </div>
        </main>
    );
};

export default Main;