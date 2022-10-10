import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataWrapper } from "../../Common/DataWrapper";
import { Paragraph } from "../../Common/Paragraph";
import { QueueWrapper } from "../../Common/QueueWrapper";
import { Title } from "../../Common/Title";
import ShowNode from "./ShowNode";

const RBFScomponent = () => {
    const [queueResult, setQueueResult] = useState();
    const [selectedNode, setSelectedNode] = useState();
    const [alternativeNode, setAlternativeNode] = useState();
    const [limit, setLimit] = useState();
    const result = useSelector((state) => state.result.result);
    const nodes = useSelector((state) => state.flow.nodes);
    const heuristic = useSelector((state) => state.flow.heuristic);
    const nodeNames = nodes.map((node) => node.data.label);
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);
    useEffect(() => {
        if (step > -1 && step < lastStep) {
            const resultItem = result[step];
            setQueueResult(resultItem[3]);
            setSelectedNode(resultItem[0]);
            setAlternativeNode(resultItem[1]);
            setLimit(resultItem[2]);
        }
    }, [step]);
    return (
        <Fragment>
            {selectedNode ? (
                <div>
                    <DataWrapper margin={"1em 0 0"}>
                        <Title>limit :</Title>
                        <Paragraph>{limit}</Paragraph>
                    </DataWrapper>
                    <QueueWrapper margin={"1em 0 0"}>
                        <Title>selected node :</Title>
                        <ShowNode
                            nodeNames={nodeNames}
                            heuristic={heuristic}
                            nodeObj={selectedNode}
                        />
                    </QueueWrapper>
                    <QueueWrapper margin={"1em 0 0"}>
                        <Title>alternative node : </Title>
                        {alternativeNode !== null ? (
                            <ShowNode
                                nodeNames={nodeNames}
                                heuristic={heuristic}
                                nodeObj={alternativeNode}
                            />
                        ) : (
                            "null"
                        )}
                    </QueueWrapper>

                    <QueueWrapper margin={"1em 0 0"}>
                        <Title margin={"1em 0 0"}>Open List :</Title>
                        {queueResult.length > 0
                            ? queueResult.map((n, index) => (
                                  <ShowNode
                                      key={index}
                                      nodeNames={nodeNames}
                                      heuristic={heuristic}
                                      nodeObj={n}
                                  />
                              ))
                            : null}
                    </QueueWrapper>
                </div>
            ) : null}
        </Fragment>
    );
};

export default RBFScomponent;
