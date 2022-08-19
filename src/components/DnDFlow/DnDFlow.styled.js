import styled from "styled-components";

export const DnDWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const DnDFlowStyled = styled.div`
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    height: 100%;

    path.react-flow__edge-path:hover {
        stroke-width: 1.5 !important;
        cursor: pointer;
    }

    .react-flow__edge.selected .react-flow__edge-path {
        stroke: ${({ theme }) => theme.colors.secondary};
    }

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

        .react-flow__handle {
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.colors.handle} !important;
        }
    }

    .react-flow__node.StartNode {
        background-color: ${({ theme }) => theme.colors.startNode} !important;
    }

    .react-flow__edge-textbg {
        cursor: pointer;
    }

    .react-flow__node.selected {
        border: 1px solid ${({ theme }) => theme.colors.primary} !important;
        box-shadow: 0 0 0 0;
        .react-flow__handle {
            background: ${({ theme }) => theme.colors.primary} !important;
        }
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
    .react-flow__node.visited {
        border: 0.1em solid ${({ theme }) => theme.colors.secondary};
        border-left-width: 0.8em;
    }

    .react-flow__controls-button {
        border-bottom: 1px solid #c596f2;
        &:hover {
            background-color: ${({ theme }) => theme.colors.backgroundSide};
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const FlowWrapper = styled.div`
    flex-grow: 1;
    height: 100%;
`;
