import { Fragment } from "react";
import { DnDNode, Img } from "./DnDNodeContainer.styled";
import { Paragraph } from "./../../../Common/Paragraph";

import Notice from "./../../../../assets/images/info.svg";

const DnDNodeContainer = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <Fragment>
            <Paragraph>
                <Img src={Notice} alt="" />
                You can drag this node to the pane on the left.
            </Paragraph>

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
