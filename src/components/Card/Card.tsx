import React from 'react';
import Image from "next/image";

const Card = ({gif}: any) => {

    return (
        <div>
            <Image
                src={gif.media_formats.gif.url}
                alt={gif.content_description || 'gif'}
                width={gif.media_formats.gif.dims[0]}
                height={gif.media_formats.gif.dims[1]}
            />
        </div>
    );
};

export default Card;