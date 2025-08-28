"use client";
import React, {useEffect, useRef} from "react";
import Searchbar from "@/components/Searchbar/Searchbar";
import Card from "@/components/Card/Card";
import {Gif} from "@/types/Gif";
import {useGifStore} from "@/store/store";
import {GifGrid, MainContainer} from "@/layout/Main/Main.styles";

const Main = () => {
    const {
        gifs,
        fetchTrending,
        fetchMoreTrending,
        fetchMoreSearch,
        currentQuery,
        isLoading,
        error,
        hasMore
    } = useGifStore();
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetchTrending();
    }, [fetchTrending]);

    useEffect(() => {
        if (!observerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    currentQuery ? fetchMoreSearch() : fetchMoreTrending();
                }
            },
            {threshold: 1.0}
        );

        observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [observerRef, hasMore, isLoading, fetchMoreTrending, fetchMoreSearch, currentQuery]);

    return (
        <MainContainer>
            <Searchbar/>

            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <GifGrid>
                {gifs.map((gif: Gif) => (
                    <Card key={gif.id} gif={gif}/>
                ))}
            </GifGrid>

            <div ref={observerRef} style={{height: 1}}/>
        </MainContainer>
    );
};

export default Main;
