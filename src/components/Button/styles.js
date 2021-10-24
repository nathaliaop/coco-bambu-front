import styled from 'styled-components'

export const Button = styled.button`
    color: #2596be;
    background-color: #abdbe3;
    padding: 1% 2%;
    margin-top: 20px;
    border: 3px solid #2596be;
    border-radius: 30px;
    outline: none;
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    font-family: 'MontSerrat', sans-serif;
    --accent-color: #C882B4;
    --color: #BA66A3;
    --rosa-claro: #FBE9F6;
    &:hover,
    &:focus{
        background-color: white;
    }
`;