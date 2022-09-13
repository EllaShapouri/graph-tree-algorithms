import styled from "styled-components";

export const InputStyled = styled.input`
    border: 0;
    border-bottom: 0.1em solid ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
    font-weight: 500;
    margin-top: 0.5em;
    padding: 0.5em;
    margin: 0.5em auto;
    padding: 0.5em;
    width: 70%;
    max-width: 10em;
    ::placeholder {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text2};
        opacity: 0.5;
    }
    &:focus {
        outline: 0;
        -webkit-box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.4);
    }
`;
