import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 100px 100px 100px;

    @media (max-width: 1200px) {
        padding: 0 80px 80px 80px;
    }

    @media (max-width: 768px) {
        padding: 0 60px 60px 60px;
    }

    @media (max-width: 480px) {
        padding: 0 40px 40px 40px;
    }
`;

export const GifGrid = styled.div`
    column-count: 4;
    column-gap: 16px;
    margin-top: 20px;

    @media (max-width: 1200px) {
        column-count: 3;
    }

    @media (max-width: 768px) {
        column-count: 2;
    }

    @media (max-width: 480px) {
        column-count: 1;
    }

    & > div {
        margin-bottom: 16px;
        break-inside: avoid;
    }
`;

