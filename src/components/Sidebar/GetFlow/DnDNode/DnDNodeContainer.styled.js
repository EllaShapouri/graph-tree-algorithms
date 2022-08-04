import styled from "styled-components";

export const DnDNode = styled.div`
    font-weight: 500;
    padding: 1em;
    color: ${({ theme }) => theme.colors.text};
    -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    border: 0.1em solid ${({ theme }) => theme.colors.secondary};
    border-radius: 0.5em;
    margin: 1.2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;

    &.input {
        border-color: #0041d0;
    }
    &.output {
        border-color: #ff0072;
    }
`;
