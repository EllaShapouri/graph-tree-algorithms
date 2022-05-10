import styled from "styled-components";

export const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 33%;
    max-width: 350px;
    padding: 0 0.5em;
    h3 {
        margin: 0.7em 0;
        min-height: 44px;
    }
    @media (max-width: 768px) {
        flex-bّasis: 100%;
        margin-bottom: 3em;
        h3 {
            min-height: auto;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const StepsWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    @media (min-width: 992px) {
        padding: 0 3em;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
