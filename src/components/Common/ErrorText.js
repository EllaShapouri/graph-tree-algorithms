import styled from "styled-components";
import { Paragraph } from "./Paragraph";

const ErrorWrapper = styled.div`
    p {
        font-size: 0.9em;
        justify-content: flex-start !important;
        color: ${({ theme }) => theme.colors.error};
    }
    line-height: 1.5em;
    width: ${({ width }) => width};
    margin: .5em auto 0.7em;
`;

const ErrorText = ({ children, width }) => {
    return (
        <ErrorWrapper width={width}>
            <Paragraph>{children}</Paragraph>
        </ErrorWrapper>
    );
};

export default ErrorText;
