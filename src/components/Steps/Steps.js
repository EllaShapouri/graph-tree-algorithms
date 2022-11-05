import { Gradientbox } from "../Common/Gradientbox";
import { Paragraph } from "../Common/Paragraph";
import { Title } from "../Common/Title";
import { GuideLine, GuideLine2, StepItem, StepsWrapper } from "./steps.styled";

import { ReactComponent as GraphShape } from "./../../assets/images/graph.svg";
import { ReactComponent as ListShape } from "./../../assets/images/list.svg";
import { ReactComponent as ControlShape } from "./../../assets/images/control.svg";
import Guide from "./../../assets/images/guide-line.svg";

const Steps = () => {
    return (
        <StepsWrapper>
            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <ListShape />
                </Gradientbox>
                <Title maxWidth="10em">
                    Chose your Algorithm and data structure
                </Title>
                <Paragraph fontSize=".9em">
                    you can choose between 9 AI search algorithms and graph or
                    tree data structure
                </Paragraph>
            </StepItem>

            <GuideLine src={Guide} alt="" />

            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <GraphShape />
                </Gradientbox>
                <Title maxWidth="10em">
                    Enter your Data graph or Data Tree
                </Title>
                <Paragraph fontSize=".9em">
                    create your own graph or tree with drag and drop nodes and
                    paths
                </Paragraph>
            </StepItem>

            <GuideLine2 src={Guide} alt="" />

            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <ControlShape />
                </Gradientbox>
                <Title>Learn how It works</Title>
                <Paragraph fontSize=".9em">
                    you can see step by step how algorithm works on your data
                    with other information
                </Paragraph>
            </StepItem>
        </StepsWrapper>
    );
};

export default Steps;
