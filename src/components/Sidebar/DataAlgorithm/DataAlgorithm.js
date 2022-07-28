import { useSelector } from "react-redux";
import { Paragraph } from "./../../Common/Paragraph";
import { Title } from "./../../Common/Title";
import { DataAlgorithmWrapper, DataWrapper } from "./DataAlgorithm.styled";

const DataAlgorithm = () => {
    const Algorithm = useSelector((state) => state.data.algorithm);
    const dataStructure = useSelector((state) => state.data.dataStructure);
    return (
        <DataAlgorithmWrapper>
            <DataWrapper>
                <Title>Data structure : </Title>
                <Paragraph>{dataStructure}</Paragraph>
            </DataWrapper>
            <DataWrapper>
                <Title>Algorithm : </Title>
                <Paragraph>{Algorithm}</Paragraph>
            </DataWrapper>
        </DataAlgorithmWrapper>
    );
};

export default DataAlgorithm;
