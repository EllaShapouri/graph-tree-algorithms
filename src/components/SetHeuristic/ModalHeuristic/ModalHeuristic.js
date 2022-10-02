import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    setAllEdges,
    setAllNodes,
    setHeuristic,
    SetShowHeuristic,
} from "../../../Redux/getFlowSlice";
import Button from "../../Button/Button";
import { ButtonWrapper } from "../../Button/Button.styled";
import { Gradientbox } from "../../Common/Gradientbox";
import ErrorText from "./../../Common/ErrorText";
import { Title } from "../../Common/Title";
import { Form } from "../../Common/Form";
import { InputStyled } from "../../Common/InputStyled";
import { useEdges, useNodes } from "react-flow-renderer";
import { InputsWrapper, InputWrapper } from "./ModalHeuristic.styled";
import { setResult } from "../../../Redux/algorithmResultSlice";
import { runAlgorithm } from "../../../Algorithms/runAlgorithm/runAlgorithm";
import { createMatrix } from "../../../utils/matrix";

const ModalHeuristic = () => {
    const nodes = useNodes();
    const edges = useEdges();
    const algorithm = useSelector((state) => state.data.algorithm);
    const depth = useSelector((state) => state.flow.depth);
    const [error, setError] = useState();
    const [heuristicList, setHeuristicList] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        var getHeuristic = [];
        e.preventDefault();
        for (let index = 0; index < nodes.length; index++) {
            var currentValue = document.querySelector(
                `#heuristic_${index}`
            ).value;
            getHeuristic.push(currentValue);
        }
        setHeuristicList([...getHeuristic]);
    };

    useEffect(() => {
        if (error === false) run();
    }, [error]);

    useEffect(() => {
        if (heuristicList.length !== 0) {
            const checkStatus = checkHeuristic();
            setError(!checkStatus);
        }
        return () => {
            dispatch(SetShowHeuristic(false));
        };
    }, [heuristicList]);

    const checkHeuristic = () => {
        if (heuristicList.length !== 0) {
            for (let index = 0; index < heuristicList.length; index++) {
                var value = heuristicList[index];
                if (!value.trim()) return false;
                else if (!/^[0-9]+$/.test(value)) return false;
            }
            return true;
        }
    };

    const run = () => {
        const validNodes = Object.freeze(nodes).map(
            ({ selected, ...proprties }) => proprties
        );
        const validEdges = Object.freeze(edges).map(
            ({ selected, ...proprties }) => proprties
        );
        dispatch(setAllEdges(validEdges));
        dispatch(setAllNodes(validNodes));
        for (let index = 0; index < heuristicList.length; index++) {
            heuristicList[index] = parseInt(heuristicList[index]);
        }
        dispatch(setHeuristic(heuristicList));
        const matrix = createMatrix(
            validNodes,
            validEdges,
            algorithm.requiredPath
        );
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
        <Form onSubmit={handleSubmit}>
            <Title>set heuristics for all nodes :</Title>
            <InputsWrapper>
                {nodes.map((node, index) => (
                    <InputWrapper key={node.id}>
                        <Title>{node.data.label} : </Title>
                        <InputStyled id={`heuristic_${index}`} />
                    </InputWrapper>
                ))}
            </InputsWrapper>
            {error ? (
                <ErrorText width="9em">Just number is valid !</ErrorText>
            ) : null}
            <ButtonWrapper margin="0">
                <Gradientbox width="150px" height="auto">
                    <Button type="submit">set heuristics</Button>
                </Gradientbox>
            </ButtonWrapper>
        </Form>
    );
};

export default ModalHeuristic;
