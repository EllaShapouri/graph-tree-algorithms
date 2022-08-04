import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    background-color: transparent;
    flex-direction: column;
    margin-top: 2em;
    -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    padding: 2em 1em;
    transition: 0.2s;

    p {
        justify-content: center !important;
    }
    div {
        margin-top: 0;
        p {
            justify-content: flex-start !important;
        }
    }
`;

export const Inputstyled = styled.input`
    border: 0;
    border-bottom: 0.1em solid ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
    font-weight: 500;
    margin-top: 0.5em;
    padding: 0.5em;
    margin: 0.5em auto;
    padding: 0.5em;
    width: 10em;
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

export const SetButton = styled.button`
    border: 0.1em solid ${({ theme }) => theme.colors.secondary};
    padding: 0.5em;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: 0.3em;
    width: 10em;
    margin: auto;
    cursor: pointer;
`;
