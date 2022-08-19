import styled from "styled-components";

export const Title = styled.h3`
    font-size: 0.95em;
    font-weight: 700;
    line-height: 1.4em;
    text-align: center;
    color: ${({ theme, color }) =>
        color === "purple" ? theme.colors.secondary : theme.colors.primary};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    margin: 0;
`;
