'use client'
import React, {useEffect, useState} from 'react';
import data from '../../../gifs.json'
import Card from "@/components/Card/Card";

const Main = () => {
    const [gifs, setGifs] = useState(JSON.parse(JSON.stringify(data.results)));

    const getGifs = async () => {
        await fetch('https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyCR1oAN_7I9eFkqtiB1Ea_8keMdJgYkOPk&client_key=my_test_app&limit=20')
            .then(res => res.json())
            .then(data => setGifs(data.results))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getGifs().then(() =>
            console.log('Gifs loaded'))
    }, [])

    return (
        <main>
            {gifs.map((gif) => (
                <Card key={gif.id} gif={gif}/>
            ))}
        </main>
    );
};

export default Main;