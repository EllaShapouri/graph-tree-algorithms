import { DataWrapper } from "../../Common/DataWrapper";
import { Paragraph } from "../../Common/Paragraph";
import { Title } from "../../Common/Title";

const ShowNode = ({nodeNames, heuristic, nodeObj}) => {
    if (nodeObj === undefined) return null;
    const { node, fx, gx } = nodeObj;
    return (
        <div>
            <DataWrapper>
                <Title color="purple">node name :</Title>
                <Paragraph>{nodeNames[node]}</Paragraph>
            </DataWrapper>
            <DataWrapper>
                <Title color="purple">{`h(x) =`}</Title>
                <Paragraph>{heuristic[node]}</Paragraph>
            </DataWrapper>
            <DataWrapper>
                <Title color="purple">{`g(x) =`}</Title>
                <Paragraph>{gx}</Paragraph>
            </DataWrapper>
            <DataWrapper>
                <Title color="purple">{`f(x) = g(x) + h(x) = `}</Title>
                <Paragraph>{fx}</Paragraph>
            </DataWrapper>
        </div>
    );
};

export default ShowNode;
