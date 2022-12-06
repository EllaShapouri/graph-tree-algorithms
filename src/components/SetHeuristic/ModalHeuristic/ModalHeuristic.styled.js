import styled from "styled-components";

export const ModalWrapperHeuristic = styled.div`
    & > div:first-child {
        margin: 0 !important;
        h3 {
            text-align: start;
        }
    }
    form {
        margin-top: 2em;
    }
`;
export const InputsWrapper = styled.div`
    overflow-y: scroll;
    max-height: 35vh;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        border: 0.1em solid #9a47e9;
        padding: 0.5em;
        margin: 0.5em;
        padding: 0.2em 0.5em;
        width: auto;
        flex-grow: 1;
    }
    h3 {
        margin-bottom: 0;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: ${({ margin }) => margin};
    button {
        padding: 0.7em 1em;
    }
    & > div {
        border-radius: 1em !important;
        margin: 0.5em 0;
    }
`;
