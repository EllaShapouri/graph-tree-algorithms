import { useSelector } from "react-redux";
import { Paragraph } from "./../../Common/Paragraph";
import { Title } from "./../../Common/Title";
import { DataWrapper } from "./DataAlgorithm.styled";
import Notice from "./../../Common/Notice";

const DataAlgorithm = () => {
    const Algorithm = useSelector((state) => state.data.algorithm);
    const dataStructure = useSelector((state) => state.data.dataStructure);
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

            <Notice>All nodes must have unique names</Notice>
            {Algorithm.requiredPath ? (
                <Notice>All edges must have a value</Notice>
            ) : null}
        </div>
    );
};

export default DataAlgorithm;
