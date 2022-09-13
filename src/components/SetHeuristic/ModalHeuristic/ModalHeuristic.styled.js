import styled from "styled-components";

export const InputsWrapper = styled.div`
    overflow-y: scroll;
    max-height: 35vh;
    margin-top: 1.5em;
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
