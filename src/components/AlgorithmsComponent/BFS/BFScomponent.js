import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paragraph } from "../../Common/Paragraph";
import { QueueWrapper } from "../../Common/QueueWrapper";
import { Title } from "../../Common/Title";

const BFScomponent = () => {
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
            {queueResult.length >= 0 ? (
                <QueueWrapper>
                    <Title color="purple">● FIFO Queue :</Title>
                    <Paragraph>
                        {`[ `}
                        {queueResult.map((data) => ` ${nodeNames[data]},`)}
                        {` ]`}
                    </Paragraph>
                </QueueWrapper>
            ) : null}
        </Fragment>
    );
};

export default BFScomponent;
