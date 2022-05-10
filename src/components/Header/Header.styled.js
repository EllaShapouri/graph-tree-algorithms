import styled from "styled-components";

export const Headerwapper = styled.header`
    h1 {
        font-size: 2em;
        font-weight: 700;
        text-align: center;
        color: ${({ theme }) => theme.colors.primary};
        img {
            max-width: 350px;
            width: 100%;
        }
    }
    p {
        font-size: 1em;
        text-align: center;
        margin-bottom: 3em;
        line-height: 1.5em;
        color: ${({ theme }) => theme.colors.text};
        @media (max-width: 768px) {
            margin-bottom: 4em;
        }
    }
`;
