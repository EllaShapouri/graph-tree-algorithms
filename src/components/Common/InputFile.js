import styled from "styled-components";

export const LabelInputFile = styled.label`
    display: inline-block;
    padding: 0.5em .8em;
    cursor: pointer;
    border-radius: 0.5em;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text2};
`;

export const InputFile = styled.input`
    position: absolute;
    z-index: -1;
    top: 6px;
    left: 1.2em;
    color: ${({ theme }) => theme.colors.text2};
`;
export const ButtonInputFile = styled.div`
    position: relative;
    padding: 0 !important;
    background: transparent;
    border: 0;
    margin-top: 1.5em;
`;
