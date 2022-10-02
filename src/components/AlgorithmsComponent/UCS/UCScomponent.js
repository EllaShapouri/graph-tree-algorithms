import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataWrapper } from "../../Common/DataWrapper";
import { Paragraph } from "../../Common/Paragraph";
import { Title } from "../../Common/Title";

const UCScomponent = () => {
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
            <Title color="purple">● Sorted list by cost :</Title>
            {queueResult.length >= 0
                ? queueResult.map((result, index) => (
                      <div key={index}>
                          <DataWrapper>
                              <Title color="purple">Node :</Title>
                              <Paragraph>{nodeNames[result.node]}</Paragraph>
                          </DataWrapper>
                          <DataWrapper>
                              <Title color="purple">Cost :</Title>
                              <Paragraph>{result.cost}</Paragraph>
                          </DataWrapper>
                          <DataWrapper>
                              <Title color="purple">path :</Title>
                              <Paragraph>
                                  {result.path.map(
                                      (path) => `${nodeNames[path]} ,`
                                  )}
                                  {nodeNames[result.node]}
                              </Paragraph>
                          </DataWrapper>
                          -----------
                      </div>
                  ))
                : null}
        </Fragment>
    );
};

export default UCScomponent;
