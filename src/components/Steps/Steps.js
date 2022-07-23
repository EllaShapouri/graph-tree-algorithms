import {Gradientbox} from "../Common/Gradientbox";
import {Paragraph} from "../Common/Paragraph";
import {Title} from "../Common/Title";
import { GuideLine,GuideLine2, StepItem, StepsWrapper } from "./steps.styled";

import { ReactComponent as GraphShape } from "./../../assets/images/graph.svg";
import Guide from "./../../assets/images/guide-line.svg";

const Steps = () => {
    return (
        <StepsWrapper>
            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <GraphShape />
                </Gradientbox>
                <Title maxWidth="10em">Chose your Algorithm and data structure</Title>
                <Paragraph fontSize=".9em">
                    It is a long established fact that a reader will be
                    distracted
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                </Paragraph>
            </StepItem>

            <GuideLine2 src={Guide} alt="" />

            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <GraphShape />
                </Gradientbox>
                <Title>Learn how It works</Title>
                <Paragraph fontSize=".9em">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                </Paragraph>
            </StepItem>
        </StepsWrapper>
    );
};

export default Steps;
