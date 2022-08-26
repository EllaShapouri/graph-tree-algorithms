import { useEffect, useState } from "react";
import { Gradientbox } from "../Common/Gradientbox";
import Button from "../Button/Button";
import { useEdges, useNodes } from "react-flow-renderer";
import { ButtonWrapper } from "../Button/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { setAllEdges, setAllNodes } from "../../Redux/getFlowSlice";
import { useNavigate } from "react-router-dom";
import { runAlgorithm } from "../../Algorithms/runAlgorithm.js/runAlgorithm";
import { setResult } from "../../Redux/algorithmResultSlice";
import { createMatrix } from "../../utils/matrix";
import ErrorHandle from "./ErrorHandle";
import { checkFlow } from "../../utils/checkFlow";

const ValidateFlow = () => {
    const nodes = useNodes();
    const edges = useEdges();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const algorithm = useSelector((state) => state.data.algorithm);
    const depth = useSelector((state) => state.flow.depth);
    const [validStatus, setValidStatus] = useState(false);
    const [errors, setErrors] = useState([]);

    const ClickHandler = () => {
        const { status, errors } = checkFlow(edges, nodes, algorithm, depth);
        setErrors(errors);
        setValidStatus(status);
    };

    useEffect(() => {
        if (validStatus) {
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
            const resault = runAlgorithm(algorithm.name, matrix, depth);
            dispatch(setResult(resault));
            // navigate new page
            navigate("/showalgorithm");
        }
    }, [validStatus]);

    return (
        <div>
            {!validStatus ? <ErrorHandle errors={errors} /> : null}
            <ButtonWrapper margin="1em auto">
                <Gradientbox width="150px" height="auto">
                    <Button onClick={ClickHandler}>Next</Button>
                </Gradientbox>
            </ButtonWrapper>
        </div>
    );
};

export default ValidateFlow;
