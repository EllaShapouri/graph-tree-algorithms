import { Fragment } from "react";
import { DnDNode } from "./DnDNodeContainer.styled";
import Notice from "./../../../Common/Notice";

const DnDNodeContainer = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <Fragment>
            <Notice>You can drag this node to the pane on the left.</Notice>

            <DnDNode
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
            >
                Default Node
            </DnDNode>
        </Fragment>
    );
};

export default DnDNodeContainer;
