import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease;

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0; 
        background: radial-gradient(
                circle,
                rgba(0, 0, 0, 0) 1%,
                rgba(0, 0, 0, 0.25) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none; /* щоб overlay не блокував кліки */
    }

    &:hover::after {
        opacity: 1;
    }
`;
