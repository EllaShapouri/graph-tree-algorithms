import { useEffect, useState } from "react";
import { Gradientbox } from "../Common/Gradientbox";
import Button from "../Button/Button";
import { useEdges, useNodes } from "react-flow-renderer";
import ErrorText from "./../Common/ErrorText";
import { validateEdges } from "../../utils/validateEdges";
import { validateNodes } from "../../utils/validateNodes";
import { ButtonWrapper } from "../Button/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { setAllEdges, setAllNodes } from "../../Redux/getFlowSlice";
import { useNavigate } from "react-router-dom";
import { runAlgorithm } from "../../Algorithms/runAlgorithm.js/runAlgorithm";
import { setResult } from "../../Redux/algorithmResultSlice";
import { createMatrix } from "../../utils/matrix";

const ValidateFlow = () => {
    const nodes = useNodes();
    const edges = useEdges();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const algorithm = useSelector((state) => state.data.algorithm);
    const [edgeError, setEdgeError] = useState({});
    const [nodeError, setNodeError] = useState({});

    const ClickHandler = () => {
        setEdgeError(validateEdges(edges));
        setNodeError(validateNodes(nodes));
    };

    useEffect(() => {
        if (edgeError.valid && nodeError.valid) {
            const validNodes = Object.freeze(nodes).map(
                ({ selected, ...proprties }) => proprties
            );
            const validEdges = Object.freeze(edges).map(
                ({ selected, ...proprties }) => proprties
            );
            dispatch(setAllEdges(validEdges));
            dispatch(setAllNodes(validNodes));
            const matrix = createMatrix(
                validNodes,
                validEdges,
                algorithm.requiredPath
            );
            const resault = runAlgorithm(algorithm.name, matrix);
            dispatch(setResult(resault));
            // navigate new page
            navigate("/showalgorithm");
        }
    }, [edgeError, nodeError]);

    return (
        <div>
            {!edgeError.valid ? (
                <ErrorText width="11em">{edgeError.errorMessage}</ErrorText>
            ) : null}
            {!nodeError.valid ? (
                <ErrorText width="11em">{nodeError.errorMessage}</ErrorText>
            ) : null}
            <ButtonWrapper margin="1em auto">
                <Gradientbox width="150px" height="auto">
                    <Button onClick={ClickHandler}>Next</Button>
                </Gradientbox>
            </ButtonWrapper>
        </div>
    );
};

export default ValidateFlow;
