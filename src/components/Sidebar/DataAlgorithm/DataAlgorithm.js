import { useSelector } from "react-redux";
import { Paragraph } from "./../../Common/Paragraph";
import { Title } from "./../../Common/Title";
import { DataWrapper } from "./DataAlgorithm.styled";
import { useLocation } from "react-router-dom";
import Notices from "./Notices/Notices";

const DataAlgorithm = () => {
    const Algorithm = useSelector((state) => state.data.algorithm);
    const dataStructure = useSelector((state) => state.data.dataStructure);
    const location = useLocation();
    return (
        <div>
            <DataWrapper>
                <Title>Data structure : </Title>
                <Paragraph>{dataStructure}</Paragraph>
            </DataWrapper>
            <DataWrapper>
                <Title>Algorithm : </Title>
                <Paragraph>{Algorithm.name}</Paragraph>
            </DataWrapper>

            {
                (location.pathname = "/showalgorithm" ? null : (
                    <Notices requiredPath={Algorithm.requiredPath} />
                ))
            }
        </div>
    );
};

export default DataAlgorithm;
