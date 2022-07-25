import styled from "styled-components";

export const Form = styled.form`
    padding: 2em;
    width: 100%;
    h3 {
        text-align: left;
        margin-bottom: .3em;
    }
    button {
        padding: .7em 1em;
    }
    @media (max-width: 768px) {
        padding: 2em 1em;
    }
`;

export const FormButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
    & > div {
        border-radius: 1em !important;
        margin: 0.5em 1em;
    }
`;

export const Select = styled.select`
    padding: 0.5em;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 0;
    color: ${({ theme }) => theme.colors.text2};
    border-bottom: 0.1em solid ${({ theme }) => theme.colors.primary};
    @media (max-width: 768px) {
    }
`;

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

export const Option = styled.option`
    padding: 0.5em;
    font-size: .9em;
    color: ${({ theme }) => theme.colors.text2};
    cursor: pointer;
    background-color: white;
    margin-bottom: 0.5em;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
    }
`;
