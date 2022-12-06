import styled from "styled-components";

export const ShowFlowStyled = styled.div`
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    height: 100%;

    .react-flow__node {
        font-size: 0.6em;
        background: white;
        border: 0.1em solid ${({ theme }) => theme.colors.text2};
        border-radius: 0.5em;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.6em;
        padding: 0.7em 0.8em;
        text-align: center;
        max-width: 8em;
        cursor: auto !important;
        transition: all .2s;
        .react-flow__handle {
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.colors.handle} !important;
        }
    }

    .react-flow__node.StartNode {
        background-color: ${({ theme }) => theme.colors.startNode} !important;
    }
    .react-flow__node.GoalNode {
        background-color: ${({ theme }) => theme.colors.goalNode} !important;
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

    .react-flow__controls button[title="toggle interactivity"] {
        display: none;
    }

    .react-flow__edge{
        transition: all .2s;
    }

    .react-flow__edge path {
        stroke-dasharray: 5;
    }

    .react-flow__edge.visited path {
        stroke-dasharray: 0;
        stroke: ${({ theme }) => theme.colors.primary} !important;
        stroke-width: 1.2;
    }

    .react-flow__edge.checked path {
        stroke-dasharray: 0;
        stroke: ${({ theme }) => theme.colors.dark} !important;
        stroke-width: 1;
    }

    .react-flow__node.visited {
        border: 0.1em solid ${({ theme }) => theme.colors.secondary};
        border-left-width: 0.8em;
        .react-flow__handle {
            background-color: ${({ theme }) => theme.colors.primary} !important;
        }
        .react-flow__handle-bottom,
        .react-flow__handle-top {
            left: 45.5%;
        }
    }
    .react-flow__node.checked {
        border: 0.1em solid ${({ theme }) => theme.colors.dark};
        border-left-width: 0.8em;
        .react-flow__handle {
            background-color: ${({ theme }) => theme.colors.dark} !important;
        }
        .react-flow__handle-bottom,
        .react-flow__handle-top {
            left: 45.5%;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
