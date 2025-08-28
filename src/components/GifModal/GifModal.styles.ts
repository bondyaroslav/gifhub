import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    max-width: 600px;
    width: 90%;
    text-align: center;
    position: relative;
`;

export const GifImage = styled.img`
    max-width: 100%;
    border-radius: 8px;
`;

export const ButtonGroup = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 12px;
`;

export const ActionButton = styled.button`
    background: #0070f3;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    background: linear-gradient(90deg, #ff5f6d, #ffc371);
    color: #fff;

    &:hover {
        opacity: 0.9;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 12px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    color: #333;

    &:hover {
        color: #000;
    }
`;
