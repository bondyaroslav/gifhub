import styled from "styled-components";

export const CardWrapper = styled.div`
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;
