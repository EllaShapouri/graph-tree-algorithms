import {Gradientbox} from "../Common/Gradientbox";
import {Paragraph} from "../Common/Paragraph";
import {Title} from "../Common/Title";
import { StepItem, StepsWrapper } from "./steps.styled";

import { ReactComponent as GraphShape } from "./../../assets/images/graph.svg";

const Steps = () => {
    return (
        <StepsWrapper className="steps-wrapper">
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

            <StepItem>
                <Gradientbox width="90px" height="90px">
                    <GraphShape />
                </Gradientbox>
                <Title>Chose your Algorithm</Title>
                <Paragraph fontSize=".9em">
                    It is a long established fact that a reader will be
                    distracted
                </Paragraph>
            </StepItem>

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
