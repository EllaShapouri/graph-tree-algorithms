import { useState } from "react";
import { Gradientbox } from "../Common/Gradientbox";
import Button from "../Button/Button";
import { useEdges, useNodes } from "react-flow-renderer";
import ErrorText from "./../Common/ErrorText";
import { validateEdges } from "../../utils/validateEdges";
import { validateNodes } from "../../utils/validateNodes";
import { ButtonWrapper } from "../Button/Button.styled";
import { useDispatch } from "react-redux";
import { setAllEdges, setAllNodes } from "../../Redux/mainSlice";
import { useNavigate } from "react-router-dom";

const ValidateFlow = () => {
    const nodes = useNodes();
    const edges = useEdges();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [edgeError, setEdgeError] = useState({});
    const [nodeError, setNodeError] = useState({});

    const ClickHandler = () => {
        setEdgeError(validateEdges(edges));
        setNodeError(validateNodes(nodes));
        if (edgeError.valid && nodeError.valid) {
            const validNodes = Object.freeze(nodes).map(({selected, ...proprties}) => proprties);
            const validEdges = Object.freeze(edges).map(({selected, ...proprties}) => proprties);
            dispatch(setAllEdges(validEdges));
            dispatch(setAllNodes(validNodes));
            // navigate new page
            navigate("/showalgorithm");
        }
    };

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
                    <Button onClick={ClickHandler}>next</Button>
                </Gradientbox>
            </ButtonWrapper>
        </div>
    );
};

export default ValidateFlow;
