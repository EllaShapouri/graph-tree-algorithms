import styled from "styled-components";

export const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    flex-basis: 23.3%;
    padding: 0 0.5em;
    h3 {
        margin: 0.7em 0;
        min-height: 44px;
    }

    p {
        text-align: center;
    }
    svg path {
        fill: white;
    }
    @media (max-width: 768px) {
        flex-basis: 100%;
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

export const GuideLine = styled.img`
    width: 15%;
    max-width: 200px;
    flex-basis: 15%;
    align-self: flex-start;
    margin-top: 2em;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const GuideLine2 = styled.img`
    transform: scale(1, -1);
    width: 15%;
    max-width: 200px;
    flex-basis: 15%;
    align-self: flex-start;
    margin-top: 3em;
    @media (max-width: 768px) {
        display: none;
    }
`;
