import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 20px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;
    background: #fff;
    color: #000;
    height: 100%;
    margin: 0;

    &::placeholder {
        color: #aaa;
    }
`;

export const SearchButton = styled.button`
    padding: 20px;
    border: none;
    border-radius: 0 8px 8px 0;
    background: linear-gradient(90deg, #ff5f6d, #ffc371);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    height: 100%;

    &:hover {
        opacity: 0.9;
    }
`;
