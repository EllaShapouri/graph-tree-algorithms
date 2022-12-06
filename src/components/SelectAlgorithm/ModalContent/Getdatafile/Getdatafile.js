import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFileFlow } from "../../../../Redux/dataSlice";
import { checkFlowFile } from "../../../../utils/checkFlowFile";
import ErrorText from "../../../Common/ErrorText";
import {
    ButtonInputFile,
    InputFile,
    LabelInputFile,
} from "../../../Common/InputFile";

const Getdatafile = ({ setFileFlowValid }) => {
    const [fileStatus, setFileStatus] = useState({ status: true, message: "" });

    const dispatch = useDispatch();

    const showFile = (e) => {
        e.preventDefault();
        setFileStatus(true);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            try {
                const { startNode, goalNode, nodes, edges } = JSON.parse(
                    reader.result
                );
                const { newNodes, newEdges } = checkFlowFile(
                    startNode,
                    goalNode,
                    nodes,
                    edges
                );
                dispatch(setFileFlow({ newNodes, newEdges }));
                setFileFlowValid(true);
            } catch (error) {
                setFileStatus({ status: false, message: error });
            }
        };
        reader.onerror = (error) => {
            setFileStatus({ status: false, message: error });
        };
    };

    return (
        <ButtonInputFile>
            <LabelInputFile htmlFor="nodes"> upload +</LabelInputFile>
            <InputFile id="nodes" type="file" onChange={showFile} />
            {fileStatus.status ? null : (
                <ErrorText width="auto">{fileStatus.message}</ErrorText>
            )}
        </ButtonInputFile>
    );
};

export default Getdatafile;
