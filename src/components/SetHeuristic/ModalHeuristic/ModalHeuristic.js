import { useState } from "react";
import FileHeuristic from "./FileHeuristic/FileHeuristic";
import InputHeuristics from "./InputHeuristic/InputHeuristics";
import RadioInputHeuristic from "./RadioInputHeuristic/RadioInputHeuristic";
import { ModalWrapper } from "./../../Common/StyledModal";
import { ModalWrapperHeuristic } from "./ModalHeuristic.styled";
import { useEdges, useNodes } from "react-flow-renderer";
import {
    setAllEdges,
    setAllNodes,
    setHeuristic,
} from "../../../Redux/getFlowSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { runAlgorithm } from "./../../../Algorithms/runAlgorithm/runAlgorithm";
import { setResult } from "../../../Redux/algorithmResultSlice";
import { createMatrix } from "../../../utils/matrix";

const ModalHeuristic = () => {
    const [type, setType] = useState("file");
    const nodes = Object.freeze(useNodes()).map(
        ({ selected, ...proprties }) => proprties
    );
    const edges = Object.freeze(useEdges()).map(
        ({ selected, ...proprties }) => proprties
    );
    const algorithm = useSelector((state) => state.data.algorithm);
    const depth = useSelector((state) => state.flow.depth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const run = (heuristicList) => {
        const matrix = createMatrix(
            nodes,
            edges,
            algorithm.requiredPath
        );
        dispatch(setAllNodes(nodes));
        dispatch(setAllEdges(edges));
        dispatch(setHeuristic(heuristicList));
        const resault = runAlgorithm(
            algorithm.name,
            matrix,
            depth,
            heuristicList
        );
        dispatch(setResult(resault));
        // navigate new page
        navigate("/showalgorithm", { replace: true });
    };

    return (
        <ModalWrapper>
            <ModalWrapperHeuristic>
                <RadioInputHeuristic setType={setType} />
                {type === "file" ? (
                    <FileHeuristic run={run} nodes={nodes} edges={edges} />
                ) : (
                    <InputHeuristics run={run} nodes={nodes} edges={edges} />
                )}
            </ModalWrapperHeuristic>
        </ModalWrapper>
    );
};

export default ModalHeuristic;
