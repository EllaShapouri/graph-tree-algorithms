import styled from "styled-components";

export const Label = styled.label`
    font-size: 1em;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text2};
    margin: 0;
    line-height: 1.5em;
    margin-right: 1em;
    @media (max-width: 768px) {
    }
`;

export const InputRadio = styled.input`
    margin-right: 0.3em;
    cursor: pointer;
    @media (max-width: 768px) {
    }
`;

export const RadioWrapper = styled.div`
    margin-top: 2em;
    @media (max-width: 768px) {
    }
`;
