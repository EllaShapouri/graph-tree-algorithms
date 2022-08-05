import styled from "styled-components";

export const ShowFlowStyled = styled.div`
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    height: 100%;

    .react-flow__node {
        font-size: 0.6em;
        background: transparent;
        border: 0.1em solid ${({ theme }) => theme.colors.text2};
        border-radius: 0.5em;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.6em;
        padding: 0.7em 0.8em;
        text-align: center;
        max-width: 8em;
        cursor: auto !important;

        .react-flow__handle {
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.colors.handle} !important;
        }
    }

    .react-flow__node.StartNode {
        background-color: ${({ theme }) => theme.colors.startNode} !important;
    }

    .react-flow__node.selectable:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary} !important;
        .react-flow__handle {
            background: ${({ theme }) => theme.colors.primary} !important;
        }
    }

    .react-flow__controls {
        box-shadow: 0 0 2px 1px rgba(154, 71, 233, 0.59);
    }

    .react-flow__controls-button {
        border-bottom: 1px solid #c596f2;
        &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundSide};
        }
    }

    .react-flow__controls button[title="toggle interactivity"]{
        display: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
