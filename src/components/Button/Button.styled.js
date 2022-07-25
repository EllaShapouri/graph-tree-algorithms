import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 1em;
    font-weight: 700;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    padding: 1em 1.5em;
    cursor: pointer;
    position: relative;
    z-index: 20;
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;
