import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ theme }) => theme.colors.text2};
    margin: 0;
    line-height: 1.5em;
    text-align: center;
`;