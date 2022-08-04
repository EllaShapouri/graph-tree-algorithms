import styled from "styled-components";
import { Paragraph } from "./Paragraph";
import Info from "./../../assets/images/info.svg";

const Img = styled.img`
    width: 1.4em;
    margin-right: 0.4em;
`;

const NoticeWrapper = styled.div`
    margin-top: 1em;
`;

const Notice = ({ children }) => {
    return (
        <NoticeWrapper>
            <Paragraph>
                <Img src={Info} alt="" />
                {children}
            </Paragraph>
        </NoticeWrapper>
    );
};

export default Notice;
