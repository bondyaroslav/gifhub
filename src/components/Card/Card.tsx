import React from 'react';
import Image from "next/image";
import {Gif} from "@/types/Gif";
import {CardWrapper} from "@/components/Card/Card.styles";

type CardProps = {
    gif: Gif;
};

const Card = ({gif}: CardProps) => {

    return (
        <CardWrapper>
            <Image
                src={gif.media_formats.gif!.url}
                alt={gif.content_description}
                width={gif.media_formats.gif!.dims[0]}
                height={gif.media_formats.gif!.dims[1]}
                unoptimized
            />
        </CardWrapper>
    );
};

export default Card;