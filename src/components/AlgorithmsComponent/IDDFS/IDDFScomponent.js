import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataWrapper } from "../../Common/DataWrapper";
import { Paragraph } from "../../Common/Paragraph";
import { Title } from "../../Common/Title";
import DFScomponent from "../DFS/DFScomponent";

const IDDFScomponent = () => {
    const [depth, setDepth] = useState(0);
    const result = useSelector((state) => state.result.result);
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);
    useEffect(() => {
        if (step > -1 && result[step].length === 0 && step < lastStep - 1)
            setDepth(depth + 1);
    }, [step]);
    return (
        <Fragment>
            <DataWrapper>
                <Title color="purple">● Depth :</Title>
                <Paragraph>{depth}</Paragraph>
            </DataWrapper>
            <DFScomponent />
        </Fragment>
    );
};

export default IDDFScomponent;
