'use client'
import React, {useEffect} from 'react';
import Searchbar from "@/components/Searchbar/Searchbar";
import Card from "@/components/Card/Card";
import {Gif} from "@/types/Gif";
import {useGifStore} from "@/store/store";
import {GifGrid, MainContainer} from "@/layout/Main/Main.styles";

const Main = () => {
    const {gifs, fetchTrending, isLoading, error} = useGifStore();

    useEffect(() => {
        fetchTrending()
    }, [fetchTrending])

    console.log(gifs)

    return (
        <MainContainer>
            <Searchbar/>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error...</p>}

            <GifGrid>
                {gifs.map((gif: Gif) => (
                    <Card key={gif.id} gif={gif}/>
                ))}
            </GifGrid>
        </MainContainer>
    );
};

export default Main;