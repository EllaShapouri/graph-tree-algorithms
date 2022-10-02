import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../../Common/Paragraph";
import { QueueWrapper } from "../../Common/QueueWrapper";
import { Title } from "../../Common/Title";

const BIDIRECTIONALcomponent = () => {
    const [queueResult, setQueueResult] = useState([]);
    const result = useSelector((state) => state.result.result);
    const nodes = useSelector((state) => state.flow.nodes);
    const nodeNames = nodes.map((node) => node.data.label);
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);
    useEffect(() => {
        if (step > -1 && step < lastStep) setQueueResult(result[step]);
    }, [step]);
    return (
        <Fragment>
            {queueResult.length > 0 ? (
                <div>
                    <QueueWrapper>
                        <Title color="purple">● path :</Title>
                        <Paragraph>
                            {queueResult[0] !== -1
                                ? queueResult[0].map(
                                      (node) => `${nodeNames[node]} ,`
                                  )
                                : "not found"}
                        </Paragraph>
                    </QueueWrapper>
                    <QueueWrapper>
                        <Title color="purple">● intersectNode :</Title>
                        <Paragraph>
                            {queueResult[1] !== -1
                                ? nodeNames[queueResult[1]]
                                : "not found"}
                        </Paragraph>
                    </QueueWrapper>
                </div>
            ) : null}
        </Fragment>
    );
};

export default BIDIRECTIONALcomponent;
