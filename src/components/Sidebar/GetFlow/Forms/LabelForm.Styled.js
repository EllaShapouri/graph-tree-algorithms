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

export const SetButton = styled.button`
    border: 0.1em solid
        ${({ theme, bg }) =>
            bg === "blue" ? theme.colors.primary : theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5em;
    background-color: ${({ theme, bg }) =>
        bg === "blue" ? theme.colors.primary : "transparent"};
    color: ${({ theme, bg }) =>
        bg === "blue" ? theme.colors.white : theme.colors.error};
    font-weight: 500;
    border-radius: 0.3em;
    width: 10em;
    margin: auto;
    margin-top: 0.2em;
    cursor: pointer;
`;
