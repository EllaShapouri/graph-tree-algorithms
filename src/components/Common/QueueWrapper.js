import styled from "styled-components";

export const QueueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: ${({ margin }) => (margin ? margin : 0)};
    * {
        align-self: flex-start;
    }
`;
