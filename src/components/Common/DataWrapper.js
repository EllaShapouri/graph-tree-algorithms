import styled from "styled-components";

export const DataWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: ${({ margin }) => (margin ? margin : 0)};
    p {
        margin-left: 0.5em;
    }
`;
